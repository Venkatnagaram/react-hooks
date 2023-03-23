import React,{useState,useCallback,useMemo} from 'react';
import ProfileValues from './profileValues';
const UseCallback = () => {
    const [number,setNumber]=useState(0);
    const [dark,setDark]=useState(false);
    const values = useCallback((increase) => {
        return [number + increase, number + 1 + increase, number + 2 + increase]
    }, [number]);
    const theme = {
        backgroundColor: dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#000',
        padding: 25
    }
    return(
        <>
            <h2>useCallback</h2>
            <p>useCallback is a hook that will return a memorized version of callback function that only changes if one of the dependancies has changes</p>
            <p>Mamorization is a way to catch a result so that doesn't need to ba computed again. It will boost the performace.</p>
            <p>It will take two parameters, 1st is function & 2nd is depandancy parameters.</p><br/>
            <div style={theme}>
                <input value={number} type="text" onChange={e=>setNumber(parseInt(e.target.value))} /><br/><br/>
                <button onClick={() => setDark(profileDark => !profileDark) }>Active</button><br/><br/>
                <ProfileValues values={values} />
            </div>
        </>
    )
}
export default UseCallback;