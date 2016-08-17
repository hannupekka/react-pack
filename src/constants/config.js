const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  API_HOST: PRODUCTION ?
    'https://api.giphy.com' :
    'https://api.giphy.com'
};
