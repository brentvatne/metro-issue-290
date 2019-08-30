/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {ImageFromSiblingPackage} from 'some-lib';
import ImageFromThisPackage from './test.png';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>You should see two identical images!</Text>
          <View style={styles.imageRow}>
            <Text style={{fontSize: 18}}>1) from sibling package:</Text>
            <Image source={ImageFromSiblingPackage} />
          </View>
          <View style={styles.imageRow}>
            <Text style={{fontSize: 18}}>2) from this package:</Text>
            <Image source={ImageFromThisPackage} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
