const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //aqui le estoy diciendo que archivos tiene que copiar de donde a donde
  //todo se convertira en un solo archivo
  entry: './src/app/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000
  },
  //tambien vas a copiar los archivos css
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  //y tambien el html
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};