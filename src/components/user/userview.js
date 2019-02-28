import React from 'react';

const UserView = (props) => {
    const { user } = props;

    return(
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4 my-auto">
                    <img src={user.avatarURL} width="125" height="125" className="rounded-circle" alt={user.name} />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="col">
                                    Answered questions
                                </div>
                                <div className="col">
                                {Object.keys(user.answers).length}
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col">
                                    Created questions
                                </div>
                                <div className="col">
                                {Object.keys(user.questions).length}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}