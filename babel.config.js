module.exports = {
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '~',
            rootPathSuffix: 'src/client'
          },
          {
            rootPathPrefix: '@',
            rootPathSuffix: 'src/api'
          }
        ]
      }
    ]
  ],
  presets: [
    [
      '@babel/env',
      {
        targets: {
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1'
        },
        useBuiltIns: 'usage'
      }
    ],
    [
      '@babel/preset-react',
      {
        development: process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
      }
    ]
  ]
}
