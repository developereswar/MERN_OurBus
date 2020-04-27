require("@babel/register")({
  presets: ["@babel/preset-env"]
});
require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-transform-modules-commonjs"]
});

module.exports = require("./index.js");
