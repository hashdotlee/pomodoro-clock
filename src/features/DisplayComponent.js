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
            isPlay:false,
            session:props.sessionLen,
            toggle:false
        };
        this.handlePlay = this.handlePlay.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.Timer = this.Timer.bind(this);
        this.audio = new Audio('https://www.soundjay.com/button/sounds/beep-04.mp3')
    }
    componentDidMount() {
      this.audio.addEventListener('ended', () => this.setState({ play: false }));
    }
  
    componentWillUnmount() {
      this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
    }
  
    handlePlay(){
        this.setState({
            isPlay:!this.state.isPlay
        });
        clearInterval(this.interval);
        this.Timer()
    }
    handleReset(){
        clearInterval(this.interval);
        this.setState({
            session:this.props.sessionLen
        })
        this.props.resetAction()
    }

    Timer () {
        if(this.state.isPlay){
        this.interval = setInterval(()=>{        if(this.state.session<1/60&&!this.state.toggle){
            this.setState({
                session:this.props.breakLen,
                toggle:!this.state.toggle
            });this.audio.play()
        } else if(this.state.session<1/60&&this.state.toggle){this.setState({
            session:this.props.sessionLen,
            toggle:!this.state.toggle
        });this.audio.play()}
        else{ this.setState({session:this.state.session-1/60})}} , 1000);

        }
        else{
            clearInterval(this.interval);
        }
    }
    componentWillReceiveProps(){
        setTimeout(()=>{this.setState({
            session:this.props.sessionLen
        })},10)
    }
    render(){
        console.log(this.state.isPlay)
        return (
            <div>
                <h2>{Math.floor(this.state.session)}:{Math.floor((this.state.session*60)%60)}</h2>
                <button onClick={this.handlePlay}> play/pause </button>
                <button onClick={this.handleReset}> reset </button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Display)