import { IRootState } from '@app/types';

const getUsers = (state: IRootState) => state.users.users;

export default getUsers;
