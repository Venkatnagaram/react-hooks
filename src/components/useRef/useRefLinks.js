import React from 'react';
import {Link} from 'react-router-dom';
const UseRefLinks = () => {
	return(
		<>
			<center><h2>useRef</h2></center>
			<ul>
				<Link to="/useref/persist"><li>Persist value between renders</li></Link>
				<Link to="/useref/reference"><li>Reference input element</li></Link>
				<Link to="/useref/previous"><li>Get previous state value</li></Link>
			</ul>
	        <hr/>
		</>
	)
}
export default UseRefLinks;