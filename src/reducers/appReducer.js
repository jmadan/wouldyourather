const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
      case 'LOAD_INITIAL_DATA':
        return Object.assign({}, state);
      case 'SIGNIN_USER':
        return Object.assign({}, state, {loggedInUserId: action.payload.id});
      case 'SIGNOUT_USER':
        delete state.loggedInUserId;
        return Object.assign({}, state);
      default:
        return state;
    }
  }
  