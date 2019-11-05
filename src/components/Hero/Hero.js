import React from 'react';
import './Hero.css';
import illustration from '../../images/illustration-working.svg';

const Hero = () => {
	return (
		<div>
			<header className="header">
				<div className="first">
					<img className="illustration" src={illustration} alt="illustration" />
				</div>
				<div className="second">
					<div>
						<h1 className="introHeader">More than just shorter links</h1>
						<p className="introParagraph">
							Build your brand’s recognition and get detailed insights on how your links are performing.
						</p>
						<button className="getStaredButton">Get Started</button>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Hero;
