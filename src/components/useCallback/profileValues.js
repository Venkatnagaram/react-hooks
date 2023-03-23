import React,{useState, useEffect} from 'react';
const ProfileValues = ({values}) => {
    const [number,setNumbers]=useState([]);
    useEffect(()=>{
        setNumbers(values(1));
        console.log('values are updated')
    },[values]);
    return(
        <>
            Values : { number.map(items => `${items}, `) }
        </>
    )
}
export default ProfileValues;