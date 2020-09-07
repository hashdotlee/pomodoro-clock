import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const incBreakAction = () => {
    return {
        type: "INCREASE_BREAK"
    }
}
const decBreakAction = () => {
    return {
        type: "DECREASE_BREAK"
    }
}
const mapStateToProps = (state) => {
    return {
        breakLen:state.break
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({incBreakAction,decBreakAction}, dispatch)
    }
}
class Break extends Component{
    
    render(){
        return (
            <div>
                <h2 id="break-label">Break Length</h2>
                <h3 id="break-length">{this.props.breakLen}</h3>
                <button id="break-increment" onClick = {this.props.breakLen<60?this.props.incBreakAction:null}> inc </button>
                <button id="break-decrement" onClick={this.props.breakLen>1?this.props.decBreakAction:null}> dec </button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Break)