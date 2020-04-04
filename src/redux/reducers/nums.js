import { ASYNC_ADD } from "../actionTypes";
const num = 0;

export default function(state = num, action) {
  switch (action.type) {
    case ASYNC_ADD: {
      return state + 1;
    }
    default:
      return state;
  }
}
