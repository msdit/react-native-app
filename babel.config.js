module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          assets: "./src/assets",
          shared: "./src/components/shared",
          comps: "./src/components",
          const: "./src/constants",
          ts: "./src/types"
        },
      },
    ],
  ],
};
