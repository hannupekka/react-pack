const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  API_HOST: PRODUCTION ?
    'http://api.giphy.com' :
    'http://api.giphy.com'
};
