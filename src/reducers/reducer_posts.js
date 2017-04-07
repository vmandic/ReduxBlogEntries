import { FETCH_POSTS, FETCH_POST } from "../actions/index";

const INITIAL_STATE = {
  all: [],
  post: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state, // keep old state, destructure it as multiple props
        post: action.payload.data // overwrite from old state with newly resolved post data
      };

    case FETCH_POSTS:
      return {
        ...state,
        all: action.payload.data
      };

    // no need for DELETE_POST

    default:
      return state;
  }
}