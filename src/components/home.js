import React, { Component } from 'react';
import AnsweredQs from './dashboard/userAnsweredQ';
import UnAnsweredQs from './dashboard/userUnAnsweredQ';
// import logo from '../../public/imgs/logo.svg';

class Home extends Component {

    render(){
       
        return (
            <div className="container">
            <div className="media-body">
              <div className="container-fluid">
                <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="unanswered-tab" data-toggle="tab" href="#unanswered" role="tab" aria-controls="profile" aria-selected="true">Unanswere Questions</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="answered-tab" data-toggle="tab" href="#answered" role="tab" aria-controls="saved" aria-selected="false">Answered Questions</a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="unanswered" role="tabpanel" aria-labelledby="unanswered-tab">
                    <UnAnsweredQs />
                  </div>
                  <div className="tab-pane fade" id="answered" role="tabpanel" aria-labelledby="answered-tab">
                    <AnsweredQs />
                  </div>
                </div>
              </div>
            </div>
            </div>
        )
    }
}

export default Home;