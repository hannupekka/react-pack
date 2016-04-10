if (process.env.NODE_ENV === 'production') {
  module.exports = require('containers/utils/Root.prod');
} else {
  module.exports = require('containers/utils/Root.dev');
}
