import React, { Fragment } from 'react';
import './Footer.css';
import footerLogo from '../../images/logo-2.svg';
import instagram from '../../images/icon-instagram.svg';
import twitter from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import facebook from '../../images/icon-facebook.svg';

const Footer = (props) => {
	return (
		<Fragment>
			<footer className="footer">
				<div className="logoContainer">
					<img src={footerLogo} alt="footer logo" />
                    <p>Developed By <strong>Runo Saduwa</strong></p>
				</div>
				<div>
					<h1>Features</h1>
					<ul>
						<li>
							<a href="">Link shortening</a>
						</li>
						<li>
							<a href="">Branded Links</a>
						</li>
						<li>
							<a href="">Analytics</a>
						</li>
					</ul>
				</div>
				<div>
					<h1>Resources</h1>
					<ul>
						<li>
							<a href="">Blog</a>
						</li>
						<li>
							<a href="">Developers</a>
						</li>
						<li>
							<a href="">Support</a>
						</li>
					</ul>
				</div>
				<div>
					<h1>Company</h1>

					<ul>
						<li>
							<a href="">About</a>
						</li>
						<li>
							<a href="">Our team</a>
						</li>
						<li>
							<a href="">Careers</a>
						</li>
						<li>
							<a href="">Contact</a>
						</li>
					</ul>
				</div>
				<div className="socials">
					<img src={facebook} alt="facebook" />
					<img src={twitter} alt="twitter" />
					<img src={pinterest} alt="pinterest" />
					<img src={instagram} alt="instagram" />
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
