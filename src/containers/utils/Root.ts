import { Root as devRoot } from '@app/containers/utils/Root.dev';
import { Root as prodRoot } from '@app/containers/utils/Root.prod';

export default (process.env.NODE_ENV === 'production' ? prodRoot : devRoot);
