import React,{useEffect, useState} from "react";
const UseEffect = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count + 1)
        }, 5000)
    },[count])
    return(
        <>
            <h2>useEffect</h2>
            <p>useEffect is trigger after return statment. useEffect hook allow you perform side effects in function components. fetch data is one example of side effect.</p>
            <p>Count will update in every 5 seconds: {count}</p>
        </>
    )
}
export default UseEffect;