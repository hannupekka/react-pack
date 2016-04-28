const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  API_URL: PRODUCTION ?
    "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" :
    "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag="
}
