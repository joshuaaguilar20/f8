import { FETCH_USER, NO_USER } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case NO_USER:
      return false
    default:
      return state;
  }
}
