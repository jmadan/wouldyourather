import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveQuestionAction } from '../../actions/userActions';


class AddQuestion extends Component {
    constructor(props){
        super(props);
        this.state = {
            option1: '',
            option2: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        const { actions, appContext } = this.props;
        const { loggedInUserId } = appContext;
        const {option1, option2} = this.state;
        actions.saveQuestionAction({optionOneText: option1, optionTwoText: option2, author:loggedInUserId});
        this.props.history.push('/');
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
          });
    }

    render(){
        const { option1, option2 } = this.state;
        return (
            <div className="container">
            <div className="row">
            <div className="col-6 offset-md-3">
            <div className="card text-center">
                <div className="card-header">
                    Create New Question
                </div>
                <div className="card-body">
                <p className="card-text">Complete the question:</p>
                <h4>Would you rather...</h4>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" name="option1" id="option1" placeholder="Enter Option One Text Here" value={option1} onChange={this.handleChange} />
                    </div>
                    <p>OR</p>
                    <div className="form-group">
                        <input type="text" className="form-control" name="option2" id="option2" placeholder="Enter Option Two Text Here"  value={option2} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
                </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        appContext: store.AppContext,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Object.assign({}, { saveQuestionAction }), dispatch),
      };
}

export default connect(mapStateToProps,mapDispatchToProps)(AddQuestion);