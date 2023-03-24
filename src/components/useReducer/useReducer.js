import React,{useReducer} from "react";
const initialState = {count:0};
function reducer(state, action){
    switch(action.type){
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            throw new Error()
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer,initialState)
    return(
        <>
            <h2>useReducer</h2>
            <p>useReducer is same like Redux.</p>
            <p>useReducer is return our state values to local const variable based on our action. It will take two arguments reducer & initialState.</p>
            <b><pre>const[state,dispatch] = useReducer(reducer,initialState);</pre></b>
            <p>Count: {state.count}</p>
            <button onClick={()=>dispatch({type: 'decrement'})}> - </button> &nbsp; &nbsp; <button onClick={()=>dispatch({type: 'increment'})}> + </button>
        </>
    )
}
export default UseReducer;