import React, { Component } from 'react';
import {connect} from 'react-redux';
import QuestionView from '../question/pollQuestionView';


class UserAnsweredQ extends Component {
    render(){
        const { questions, appContext, users } = this.props;
        const user = users[appContext.loggedInUserId];
        const questionsToDisplay = Object.keys(questions)
            .filter(q => !Object.keys(user.answers).includes(q))
            .map(q => questions[q])
            .sort((x,y) => {
                if (y.timestamp < x.timestamp) return -1;
                if (y.timestamp > x.timestamp) return 1;
                return 0;
            })
            .map(ques => <QuestionView key={ques.id} question={ques} users={users}/>);
        
        return(<div>{questionsToDisplay}</div>);
    }
}

const mapStateToProps = (store) => {
    return {
        appContext: store.AppContext,
        questions: store.Questions,
        users: store.Users
    }
}

export default connect(mapStateToProps)(UserAnsweredQ);

