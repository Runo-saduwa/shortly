import React from 'react';
import './linkForm.css';

const LinkForm = ({ postUrl, onChangeHandler, link}) => {

	return (
		<React.Fragment>
			<form onSubmit={postUrl} className="form" >
				<input
				    
					onChange={onChangeHandler}
					className="input"
					type="text"
					name="longUrl"
					value={link}
					placeholder="shorten a link here..."
				/>
				<button type="submit" className="formButton">
					shorten it!
				</button>
			</form>
		</React.Fragment>
	);
};

export default LinkForm;
