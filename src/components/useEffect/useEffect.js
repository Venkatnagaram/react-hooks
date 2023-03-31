import React,{useEffect, useState} from "react";
const UseEffect = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        getApiData();
    },[])
    // Function to collect data
    const getApiData = async () => {
        const data = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
        ).then((response) => response.json());
    
        // update the state
        setUsers(data);
    };
    return(
        <>
            <h2>useEffect</h2>
            <p>useEffect is trigger after return statment. useEffect hook allow you perform side effects in function components. fetch data is one example of side effect.</p>
            <ul>
                {
                    users.map(user=><li key={user.id}><b>{user.id}.</b> {user.name}</li>)
                }
            </ul>
        </>
    )
}
export default UseEffect;