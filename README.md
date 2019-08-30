# Repro metro#290

1. Clone this repo
2. Run yarn in workspace root
3. `cd` into `packages/testing-uris` and run `react-native run-android` - notice that the image from the sibling package does not load. On iOS it does, perhaps due to different defaults around URI normalization.
