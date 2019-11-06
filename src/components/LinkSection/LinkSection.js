import React from 'react';
import LinkForm from '../linkForm/linkForm';
import './LinkSection.css';

const LinkSection = () => {
	return (
		<section>
			<div className="formDiv">
				<div className="line" />
				<LinkForm />
			</div>
			<div className="links">
			{/* list goes here */}
			</div>
		</section>
	);
};

export default LinkSection;
