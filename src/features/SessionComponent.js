import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const incSessionAction = () => {
    return {
        type: "INCREASE_SESSION"
    }
}
const decSessionAction = () => {
    return {
        type: "DECREASE_SESSION"
    }
}
const mapStateToProps = (state) => {
    return {
        sessionLen:state.session
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({incSessionAction,decSessionAction}, dispatch)
    }
}

class Session extends Component{
    
    render(){
        return (
            <div>
                <h2 id="session-label">Session Length</h2>
                <h3 id="session-length">{this.props.sessionLen}</h3>
                <button id="session-increment"  onClick = {this.props.sessionLen<60?this.props.incSessionAction:null}> inc </button>
                <button id="session-decrement" onClick={this.props.sessionLen>1?this.props.decSessionAction:null}> dec </button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Session)