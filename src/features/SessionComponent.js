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
                <h2>Session = {this.props.sessionLen}</h2>
                <button onClick = {this.props.incSessionAction}> inc </button>
                <button onClick={this.props.sessionLen>1?this.props.decSessionAction:null}> dec </button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Session)