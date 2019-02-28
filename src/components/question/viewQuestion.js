import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../../actions/userActions';
import QuestionStats from './questionStats';


class ViewQuestion extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedOption: '',
            answered: false,
            userid: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        const { users, appContext } = this.props;
        const questionid = this.props.match.params.id;
        const usersAnsweredQuestions = Object.keys(users[appContext.loggedInUserId].answers);
        if(usersAnsweredQuestions.includes(questionid)){
            this.setState({
                answered: true
            })
        }
    }

    onSubmit(e, qid){
        e.preventDefault();
        const { actions } = this.props;
        this.setState({
            answered: true
        });
        actions.answerQuestionAction({authedUser: this.state.userid, qid, answer: this.state.selectedOption });
        
    }

    handleChange(event){
        const { appContext } = this.props;
        this.setState({
            selectedOption: event.target.value,
            userid: appContext.loggedInUserId
          });
    }

    render(){
        const { users, questions, appContext } = this.props;
        const questionid = this.props.match.params.id;
        const question = questions[questionid];
        const author = users[question.author];
        const { answered } = this.state;

        if(!answered){
            return(
                <div className="container">
            <div className="row">
            <div className="col-6 offset-md-3">
                <div className="card">
                        <div className="card-body">
                            <div className="card-header bold">{author.name} asks:</div>
                            <div className='container'>
                                <div className='row justify-content-center'>
                                    <div className='col-4 border-right my-auto'>
                                        <img src={author.avatarURL} alt={author.name} className='rounded-circle' width="150" height="150"/>
                                    </div>
                                    <div className='col-8'>
                                        <h5 className="card-title">Would You Rather...</h5>
                                        <form onSubmit={(event) => this.onSubmit(event, questionid)} className="float-left">
                                            <div className="form-group form-check float-left">
                                                <input className="form-check-input" type="radio" name="poll" id="option1" value="optionOne" onChange={this.handleChange}/>
                                                <label className="form-check-label" htmlFor="exampleRadios1">
                                                    {question.optionOne.text}
                                                </label>
                                            </div>
                                            <div className="from-group form-check float-left">
                                                <input className="form-check-input" type="radio" name="poll" id="option2" value="optionTwo" onChange={this.handleChange}/>
                                                <label className="form-check-label" htmlFor="exampleRadios2">
                                                    {question.optionTwo.text}
                                                </label>
                                            </div>
                                            <br/>
                                            <button type="submit" className="btn btn-block btn-outline-success" disabled={this.state.answered}>Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
                </div>
                </div>
            )
        } else {
            return <div><QuestionStats question={question} author={author} users={users} loggedInUserId={appContext.loggedInUserId} /></div>
        }
    }
    
    
};

const mapStateToProps = (store) => {
    return {
        appContext: store.AppContext,
        questions: store.Questions,
        users: store.Users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Object.assign({}, UserActions), dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewQuestion);