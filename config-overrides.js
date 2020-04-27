const {
  override,
  fixBabelImports,
  addLessLoader
} = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),

  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#000',
      '@link-color': '#58595B',
      '@success-color': '#3CBF86',
      '@border-radius-base': '6px',
      '@text-color': '#58595B',
      '@border-color-base': '#DDDDDD'
    }
  })
)
