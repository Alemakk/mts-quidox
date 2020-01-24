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
      '@primary-color': '#EB5757',
      '@link-color': '#808285',
      '@success-color': '#3CBF86',
      '@border-radius-base': '6px',
      '@text-color': '#808285',
      '@border-color-base': '#DDDDDD'
    }
  })
)
