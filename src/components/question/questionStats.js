import React from 'react'

const QuestionStats = (props) => {
    const { users, question, loggedInUserId, author } = props;
    const user = users[loggedInUserId];
    const totalVotes = question.optionOne.votes.length+question.optionTwo.votes.length;
    const option1Votes = (question.optionOne.votes.length/totalVotes)*100;
    const option2Votes = (question.optionTwo.votes.length/totalVotes)*100;


    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <div className='card'>
                        <div className='card-header bold'>Added by {author.name}</div>
                        <div className='card-body'>
                            <div className='container'>
                                <div className='row justify-content-center'>
                                    <div className='col-4 border-right my-auto'>
                                        <img src={author.avatarURL} alt={author.name} className='rounded-circle' width="150" height="150"/>
                                    </div>
                                    <div className='col-8'>
                                        <h5 className="card-title">Results:</h5>
                                        <p>Would you rather {question.optionOne.text}</p>
                                            <div className="progress">
                                                <div className="progress-bar bg-success" role="progressbar" style={{width: `${option1Votes}%`}} aria-valuenow={option1Votes} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div>
                                                <span>{question.optionOne.votes.length} out of {totalVotes} votes.</span>
                                            </div>
                                        <br/>
                                        <p>Would you rather {question.optionTwo.text}</p>
                                        <div className="progress">
                                                <div className="progress-bar bg-success" role="progressbar" style={{width: `${option2Votes}%`}} aria-valuenow={option2Votes} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div>
                                                <span>{question.optionTwo.votes.length} out of {totalVotes} votes.</span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionStats;