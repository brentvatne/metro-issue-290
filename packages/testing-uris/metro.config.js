/* eslint-disable import/no-commonjs, import/no-extraneous-dependencies */

const path = require('path');
const fs = require('fs');
const escape = require('escape-string-regexp');
const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
  projectRoot: __dirname,
  watchFolders: [path.resolve(__dirname, '..', '..')],

  resolver: {
    blacklistRE: blacklist(
      [
        ...fs
          .readdirSync(path.resolve(__dirname, '..'))
          .filter(d => d !== 'testing-uris'),
        '..',
      ].map(
        it =>
          new RegExp(
            `^${escape(
              path.resolve(__dirname, '..', it, 'node_modules')
            )}\\/.*$`
          )
      )
    ),

    providesModuleNodeModules: [
      '@babel/runtime',
      'react',
      'react-native',
    ],
  },

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
