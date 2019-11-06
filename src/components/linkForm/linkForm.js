import React from 'react';
import './linkForm.css';

const LinkForm = () => {
	return (
		<React.Fragment>
			<form className="form">
				<input className="input" type="text" name="link" placeholder="shorten a link here..." />
				<input type="button" className="formButton" value="shorten it!"/>
			</form>
		</React.Fragment>
	);
};

export default LinkForm;
