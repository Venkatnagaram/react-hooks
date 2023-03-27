import React, {useState,useEffect,useRef} from 'react';
import UseRefLinks from './useRefLinks';
const PersistValues = () => {
	const [count,setCount]=useState('');
	const renderCount=useRef(0)
	useEffect(()=>{
		renderCount.current = renderCount.current + 1
	})
	return(
		<>
			<UseRefLinks />
			<h2>Persist values between renders</h2>
			<p>useRef hook allows us to Persist the values between the Renders.</p>
			<input value={count} type="text" onChange={e => setCount(e.target.value) } /><br/><br/>
			<p>Value: {count}, This screen is rendered {renderCount.current} times.</p>
		</>
	);
}
export default PersistValues;