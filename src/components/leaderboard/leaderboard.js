import React from 'react';
import {connect} from 'react-redux';

const Leader = (props) => {
    const { users } = props;
    console.log(users);

    const userArray = Object.keys(users).map(i => {
        let questionsAnswered = Object.keys(users[i].answers).length;
        let questionsAsked = Object.keys(users[i].questions).length;

        return {
            'name': users[i].name,
            'avatarURL': users[i].avatarURL,
            'questionsAnswered': questionsAnswered,
            'questionsAsked': questionsAsked,
            'score': questionsAnswered + questionsAsked
        }
    });

    userArray.sort((x,y) => {
        if (y.score < x.score) return -1;
        if (y.score > x.score) return 1;
        return 0;
    })

    return (
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    {userArray.map((user, i) => {
                        return (
                            <div className="card" key={i}>
                                <div className="row no-gutters">
                                    <div className="col-2 my-auto">
                                        <img src={user.avatarURL} width="125" height="125" className="rounded-circle" alt={user.name} />
                                    </div>
                                    <div className="col-6">
                                        <div className="card-body">
                                        <h5 className="card-title">{user.name}</h5>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col pull-left">
                                                        <p>Answered questions</p>
                                                    </div>
                                                    <div className="col pull-right">
                                                        <p><span className='badge badge-secondary'>{user.questionsAnswered}</span></p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col pull-left">
                                                        <p>Created questions</p>
                                                    </div>
                                                    <div className="col pull-right">
                                                        <p><span className='badge badge-secondary'>{user.questionsAsked}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                    <div className="card text-center">
                                        <div className="card-header">
                                            Score
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{user.score}</h5>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        users: store.Users
    }
}

export default connect(mapStateToProps, null)(Leader);