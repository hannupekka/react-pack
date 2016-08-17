const prodStore = require('./configureStore.prod');
const devStore = require('./configureStore.dev');

const configureStore = process.env.NODE_ENV === 'production' ? prodStore : devStore;
export default configureStore;
