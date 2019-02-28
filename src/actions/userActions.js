import {
    saveQuestion,
    saveQuestionAnswer
} from '../utils/api';

export function saveQuestionAction(question) {
    return (dispatch) => {
        return saveQuestion(question).then(response => {
            return dispatch({
                type: 'QUESTION_CREATED',
                payload: response
            });
        });
    }

}

export function answerQuestionAction(answer) {
    return (dispatch) => {
        return saveQuestionAnswer(answer).then(response => {
            return dispatch({
                type: 'ANSWER_QUESTION',
                payload: answer
            });
        });
    }
}