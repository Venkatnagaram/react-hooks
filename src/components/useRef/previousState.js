import React,{useState,useRef,useEffect} from "react";
import UseRefLinks from "./useRefLinks";
const PreviousState = () => {
    const [name,setName]=useState();
    const refName = useRef('');
    useEffect(()=>{
        refName.current = name
    });
    return(
        <>
            <UseRefLinks />
            <h2>Previous State</h2>
            <p>We can get the Previous vlaue of the State.</p>
            <input onChange={e=>setName(e.target.value)} />
            <p>My Name: {name}</p>
            <p>Previous Name: {refName.current}</p>
        </>
    );
}
export default PreviousState;

