const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    },
    resolve: {
      extensions: [ '.ts','.js', 'jsx', '.tsx','.css']
    },
    module: {
      rules: [
          {test: /\.tsx?$/, loader: 'babel-loader'},
          {test: /\.css$/, use: ["style-loader", "css-loader"]}
      ]
    },
    plugins: [
      new HTMLWebpackPlugin({
          template: __dirname + '/index.html'
      })    
    ],
    devServer: {
        hot: true,
        port: 8099   
     }
}