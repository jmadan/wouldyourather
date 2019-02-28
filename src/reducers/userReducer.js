const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
      case 'LOAD_INITIAL_DATA_SUCCESS':
        const { users } = action.payload;
        return Object.assign({}, state,  users);
      case 'QUESTION_CREATED':
        const userid = action.payload.author;
        const questionid = action.payload.id;
        return Object.assign({}, state,
          { [userid]: Object.assign({}, state[userid], {questions: state[userid].questions.concat(questionid)})})
      case 'ANSWER_QUESTION':
          const {qid, answer, authedUser } = action.payload;
          return Object.assign({},
            state,
            {
              [authedUser]: Object.assign({},
                state[authedUser], 
                {
                  answers: Object.assign({},
                  state[authedUser].answers,
                  {[qid]: answer})
                }
              )
            });
      default:
        return state;
    }
  }
  