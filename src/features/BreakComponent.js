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
                <h2>Break = {this.props.breakLen}</h2>
                <button onClick = {this.props.incBreakAction}> inc </button>
                <button onClick={this.props.breakLen>1?this.props.decBreakAction:null}> dec </button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Break)