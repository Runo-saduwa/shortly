import React from 'react';
import './linkForm.css';

const LinkForm = () => {
	return (
		<React.Fragment>
			<form className="form">
				<input className="input" type="text" name="link" placeholder="shorten a link here..." />
				<button className="formButton">shorten it!</button>
			</form>
		</React.Fragment>
	);
};

export default LinkForm;
