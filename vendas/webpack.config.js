const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "produtos": "http://localhost:4001/remoteEntry.js",
    "grafico": "http://localhost:4002/remoteEntry.js",
  },

  shared: {
    ...shareAll({
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto'
      }),
  },

});
