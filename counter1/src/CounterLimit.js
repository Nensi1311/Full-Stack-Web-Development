import React from 'react';
class CounterLimit extends React.Component{
    constructor(props){
        super(props); <br/>
        this.state={ a:0};
    }
    increment(){
        if(this.state.a>=5){
            this.setState({msg:"Sorry"})
        }
        else{
            this.setState({a:this.state.a+1})
        }
    }

    decrement(){
        if(this.state.a<=0){
            this.setState({msg:"Sorry"})
        }
        else{
            this.setState({a:this.state.a-1})
        }
    }
    render(){
        return (
            <>
            <br/>
            {this.state.a} <br />
            <input type="button" onClick={this.increment.bind(this)} value="+" />
            <input type="button" onClick={this.decrement.bind(this)} value="-" />
            <input type="button" onClick={()=>this.setState({a:0})} value="X" /> <br/>
            {this.state.msg}
            </>
        );
    }
}
export default CounterLimit;