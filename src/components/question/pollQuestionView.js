import React from 'react';
import { Link } from 'react-router-dom';

const PollQuestionView = (props) => {
    if(props.question){
        return (
        <div className="card">
            <div className="card-header">
                {props.question.author} ask's
            </div>
            <div className="row no-gutters">
                <div className="col-4 my-auto">
                    <img src={props.users[props.question.author].avatarURL} width="125" height="125" className="rounded-circle" alt={props.users[props.question.author].name} />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">Would you rather</h5>
                        <p className="card-text">{props.question.optionOne.text}</p>
                        <Link to={`/questions/${props.question.id}`} type="button" className="btn btn-block btn-outline-success">View Poll</Link>
                    </div>
                </div>
            </div>
        </div>
        )
    } else {
        return <></>;
    }
};

export default PollQuestionView;