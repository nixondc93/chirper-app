import { RECEIVE_USERS } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      console.log('user reduver');
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
}
