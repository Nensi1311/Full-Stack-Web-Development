import React from 'react'
function CounterHooks(){
    const [no, setNo] = React.useState(0)
    const[msg, setMsg] = React.useState("")
    const Increment = () => {
        if(no>=5){
            setMsg("Sorry")
        }
        else{
            setNo(no+1)
            setMsg("")
        }
    }
    const Decrement = () => {
        if(no<=0){
            setMsg("Sorry")
        }
        else{
            setNo(no-1)
            setMsg("")
        }
    }
    return(<div>
        <h1>Counter</h1>
        <h2>{no}</h2>
        <input type='button' onClick={Increment} value='+' />
        <input type='button' onClick={Decrement} value='-' />
        <input type='button' onClick={()=>setNo(0)} value='x' />
        {msg}
    </div>
    )
}
export default CounterHooks