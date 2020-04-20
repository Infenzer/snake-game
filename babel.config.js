module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: 3,
      // debug: true,
      // exclude: ['es6.regexp.to-string', 'es6.number.constructor'],
    }],
    "@babel/preset-typescript",
  ],

  plugins: ["@babel/plugin-proposal-class-properties"]
}