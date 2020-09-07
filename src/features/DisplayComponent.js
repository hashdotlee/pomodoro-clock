import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const resetAction = () => {
    return {
        type:"RESET"
    }
}
const mapStateToProps = (state) => {
    return {
        sessionLen:state.session,
        breakLen:state.break
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({resetAction}, dispatch)
    }
}


class Display extends Component{
    constructor(props){
        super(props);
        this.state = {
            isPlay:true,
            session:0,
            toggle:true,
            reset :true
        };
        this.handlePlay = this.handlePlay.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.Timer = this.Timer.bind(this);
    }
  
    handlePlay(){
        this.setState({
            isPlay:!this.state.isPlay,
            reset:false
        });
        clearInterval(this.interval);
        this.Timer()
        
    }
    handleReset(){
        clearInterval(this.interval);
        document.getElementById("beep").load()
        this.setState({
            isPlay:true,
            reset:true,
            session:0,
            toggle:true
        })
        this.props.resetAction()
    }

    Timer () {
        if(this.state.isPlay){
        this.interval = setInterval(()=>{
          if(this.state.session>this.props.sessionLen-1/60 && this.state.toggle){
            this.setState({
                session:0-this.props.breakLen+this.props.sessionLen,
                toggle:!this.state.toggle
            });
            document.getElementById("beep").play()
          }
          else if (this.state.session>this.props.sessionLen-1/60 && !this.state.toggle){
            this.setState({
            session:0,
            toggle:!this.state.toggle
            });
            document.getElementById("beep").play()
            
         }
          else { 
            this.setState({session:this.state.session+1/60});console.log(this.state.session)}
          } , 1000);

        }
        else{
            clearInterval(this.interval);
        }
    }

    render(){
        console.log(this.state.isPlay)
        let minute= Math.floor(this.props.sessionLen-this.state.session);
        let second= Math.floor(((this.props.sessionLen -this.state.session)*60)%60);
        return (
            <div>
                <h2 id="timer-label">{this.state.toggle?"Session":"Break"}</h2>
                <h3 id="time-left">{minute<10?'0'+minute:minute}:{second<10?'0'+second:second}</h3>
                <button id="start_stop" onClick={this.handlePlay}> play/pause </button>
                <button id="reset" onClick={this.handleReset}> reset </button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Display)