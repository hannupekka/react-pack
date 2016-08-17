const prodRoot = require('containers/utils/Root.prod');
const devRoot = require('containers/utils/Root.dev');

const Root = process.env.NODE_ENV === 'production' ? prodRoot : devRoot;
export default Root;
