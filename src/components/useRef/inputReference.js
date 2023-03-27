import React, {useRef,useState} from 'react';
import UseRefLinks from './useRefLinks';
const InputReference = () => {
	const [name,setName]=useState('');
	const inputRef=useRef();
	const focusHandler = () => {
		inputRef.current.value = 'Foucs Handler...';
		setName('Foucs Handler...');
		inputRef.current.focus();
	}
	return(
		<>
			<UseRefLinks />
			<h2>Reference Input Element</h2>
			<p>useRef hook allows us to directly create a reference to the DOM element in functional component.</p>
			<p>useRef return a mutable ref object. The object has property called current.</p>
			<p>Name: {name}</p>
			<input ref={inputRef} value={name} type="text" onChange={e => setName(e.target.value)} /><br/><br/>
			<button onClick={focusHandler}>Focus</button>
		</>
	);
}
export default InputReference;