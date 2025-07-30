const path = require('path');

function webpackAliasPlugin() {
  return {
    name: 'webpack-alias-plugin',
    configureWebpack() {
      return {
        resolve: {
          alias: {
            '@shared': path.resolve(__dirname, '../docs-lab/shared'),
          },
        },
      };
    },
  };
}

module.exports = webpackAliasPlugin;
