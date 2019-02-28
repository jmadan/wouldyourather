const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
      case 'LOAD_INITIAL_DATA_SUCCESS':
        const { questions } = action.payload;
        return Object.assign({}, state, questions);
      case 'QUESTION_CREATED':
        const id = action.payload.id;
        const question = action.payload;
        return Object.assign({}, state, {[id]: question});
      case 'ANSWER_QUESTION':
        const {qid, answer, authedUser } = action.payload;
        return Object.assign({},
          state,
          {
            [qid]: Object.assign({},
              state[qid], 
              {
                [answer]: Object.assign({},
                  state[qid][answer],
                  {votes: state[qid][answer].votes.concat(authedUser)}
                  )
              }
            )
          });
      default:
        return state;
    }
  }
  