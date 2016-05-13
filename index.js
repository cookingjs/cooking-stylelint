/**
 * @param  {object} cooking - add, remove and config
 * @param  {*} options - custom option
 */

module.exports = function (cooking, option) {
  cooking.add('preLoader.stylelint', {
    test: /\.s?(a|c)ss$/,
    exclude: /node_modules|bower_components/,
    loader: 'stylelint-loader'
  })
  
  cooking.config.stylelint = {
    configOverrides: {
      rules: {
        "indentation": 2
      }
    }
  }
  
  if(option && option.extendStandard) {
    cooking.config.stylelint.configOverrides.extends = "stylelint-config-standard"
  }
}