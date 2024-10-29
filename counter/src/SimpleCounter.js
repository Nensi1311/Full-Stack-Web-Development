import React from 'react';
class SimpleCounter extends React.Component{
    constructor(props){
        super(props); <br/>
        this.state={a:0};
    }
    render(){
        return (
            <>
            <br/>
            {this.state.a} <br />
            <input type="button" onClick={()=>this.setState({a:this.state.a+1})} value="+" />
            <input type="button" onClick={()=>this.setState({a:this.state.a-1})} value="-" /> 
            <input type="button" onClick={()=>this.setState({a:0})} value="X" />
            </>
        );
    }
}
export default SimpleCounter;