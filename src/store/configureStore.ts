import { configureStore as configureStoreDev } from './configureStore.dev';
import { configureStore as configureStoreProd } from './configureStore.prod';

export default (process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev);
