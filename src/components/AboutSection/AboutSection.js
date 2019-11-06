import React from 'react';
import './AboutSection.css';
import LinkForm from '../linkForm/linkForm';

const AboutSection = (props) => {
	return (
		<React.Fragment>
		<div className="aboutSection">
			<LinkForm />
			<div className="about" />
		</div>
		<div className="aboutContent">
			<div className="aboutHeaders">
			<h1>Advanced Statistics</h1>
			<p>Track how your links are performing across the web with our advanced statistics dashboard</p>
			</div>
		</div>
		</React.Fragment>
	);
};

export default AboutSection;
