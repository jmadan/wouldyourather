const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
      case 'LOAD_INITIAL_DATA':
        return Object.assign({}, state);
      case 'LOAD_INITIAL_DATA_SUCCESS':
        const { users, questions } = action.payload;
        return Object.assign({}, state, {users, questions});
      default:
        return state;
    }
  }
  