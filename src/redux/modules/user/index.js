const URL = 'https://randomuser.me/api/';

export const FETCH_RANDOM_USERS = 'react-pack/ui/FETCH_RANDOM_USER';
export const FETCH_RANDOM_USERS_SUCCESS = 'react-pack/ui/FETCH_RANDOM_USER_SUCCESS';
export const FETCH_RANDOM_USERS_FAILURE = 'react-pack/ui/FETCH_RANDOM_USER_FAILURE';

export const fetchRandomUsers = () => async dispatch => {
  await dispatch({
    type: FETCH_RANDOM_USERS,
    payload: {},
  });

  try {
    const response = await Promise.all([fetch(URL), fetch(URL)]);
    const json = await Promise.all(response.map(r => r.json()));
    const users = json.map(user => user.results[0]);

    return dispatch({
      type: FETCH_RANDOM_USERS_SUCCESS,
      payload: { users },
    });
  } catch (error) {
    return dispatch({
      type: FETCH_RANDOM_USERS_FAILURE,
      payload: error,
    });
  }
};

export const initialState = {
  isLoading: false,
  isError: false,
  users: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RANDOM_USERS:
      return {
        ...initialState,
        isLoading: true,
      };
    case FETCH_RANDOM_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        isLoading: false,
      };
    case FETCH_RANDOM_USERS_FAILURE:
      return {
        ...initialState,
        isError: true,
      };
    default:
      return state;
  }
}
