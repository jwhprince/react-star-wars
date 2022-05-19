const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        
        '@components': 'src/components',
        '@constants': 'src/constants',
        '@hoc-helpers': 'src/hoc-helpers',
        '@services': 'src/services',
        '@utils': 'src/utils',
        '@pages': 'src/pages',
        '@styles': 'src/styles',
      })(config);
    return config;
  }