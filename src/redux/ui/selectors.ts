import { IRootState } from '@app/types';

const getShowGreeting = (state: IRootState) => state.ui.showGreeting;

export default getShowGreeting;
