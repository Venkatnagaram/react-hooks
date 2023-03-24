import React,{useState} from "react";
const UseState = () => {
    const [count,setCount]=useState(0);
    return(
        <>
            <h2>useState</h2>
            <p>useState is a Hook that lets you add React state to function components.</p>
            <p>Count: {count}</p>
            <button onClick={()=>setCount( count => count + 1)}>Increase</button> &nbsp;  &nbsp; 
            <button onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}
export default UseState;