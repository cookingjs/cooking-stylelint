/**
 * @param  {object} cooking - add, remove and config
 * @param  {*} options - custom option
 */

module.exports = function (cooking, opiton) {
  cooking.add('preLoader.stylelint', {
    test: /\.s?(a|c)ss$/,
    exclude: /node_modules|bower_components/,
    loader: 'stylelint-loader'
  })
  
  cooking.config.stylelint = {
    configOverrides: {
      rules: {
        "extends": "stylelint-config-standard",
        "indentation": "space"
      }
    }
  }
}