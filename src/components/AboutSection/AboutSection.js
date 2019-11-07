import React from 'react';
import './AboutSection.css';
import brandRecogniton from '../../images/icon-brand-recognition.svg'
import detailedRecords from '../../images/icon-detailed-records.svg'
import fullyCustomizable from '../../images/icon-fully-customizable.svg'
const data = [
	{
		id: '11',
		img: brandRecogniton,
		title: 'Brand Recognition',
		content:
			'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
	},
	{
		id: '12',
		img: detailedRecords,
		title: 'Detailed Records',
		content:
			'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
	},
	{
		id: '13',
		img: fullyCustomizable,
		title: 'Fully Customizable',
		content:
			'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
	}
];

const AboutSection = (props) => {
	return (
		<React.Fragment>
			<div className="aboutContent">
				<div className="aboutHeaders">
					<h1>Advanced Statistics</h1>
					<p>Track how your links are performing across the web with our advanced statistics dashboard</p>
				</div>
				<div className="spec__container">
					<div className="spec__line"></div>
					{data.map((item) => {
						return (
							<div className="spec__item" key={item.id}>
								<div className="spec__item-logo">
									<img src={item.img} alt={item.title}/>
								</div>
								<div className="spec__content">
									<h3 className="spec__item-heading">{item.title}</h3>
									<p className="spec__item-description">{item.content}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</React.Fragment>
	);
};

export default AboutSection;
