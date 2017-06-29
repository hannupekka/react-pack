// @flow
const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  API_HOST: PRODUCTION ? 'https://api.github.com' : 'https://api.github.com'
};
