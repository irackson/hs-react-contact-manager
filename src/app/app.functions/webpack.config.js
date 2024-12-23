const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    createContact: './serverless_src/createContact.ts',
    fetchContacts: './serverless_src/fetchContacts.ts',
    deleteContact: './serverless_src/deleteContact.ts',
  },
  target: 'node',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'serverless_dist'),
    libraryTarget: 'commonjs2',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: true,
          },
        },
        extractComments: false,
      }),
    ],
  },
  externals: {
    '@hubspot/api-client': '@hubspot/api-client',
    axios: 'axios',
  },
};
