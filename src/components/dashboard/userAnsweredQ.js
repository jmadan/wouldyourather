import React, { Component } from 'react';
import {connect} from 'react-redux';
import QuestionView from '../question/pollQuestionView';


class UserAnsweredQ extends Component {
    render(){
        const { questions, users, appContext } = this.props;
        const user = users[appContext.loggedInUserId];
        const validQIds = Object.keys(user.answers).filter(q => Object.keys(questions).includes(q));
        const validQs = validQIds.map(qs => questions[qs]);
        validQs.sort((x,y) => {
            if (y.timestamp < x.timestamp) return -1;
            if (y.timestamp > x.timestamp) return 1;
            return 0;
        })
    
        const ele = validQs.map(q => <QuestionView key={q.id} question={q} users={users}/>);
    
        return(<div>{ele}</div>);
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

