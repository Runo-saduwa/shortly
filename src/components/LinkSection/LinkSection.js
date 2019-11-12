import React, { useState } from 'react';
import axios from 'axios';
import LinkForm from '../linkForm/linkForm';
import './LinkSection.css';

const LinkSection = () => {
	let random = (Math.random() * 1999).toFixed(1);
	let [ link, setLink ] = useState('');
	let [ links, setLinks ] = useState([]);
	const addLink = (shortUrl, link) => {
		let newLink = {
			id: random,
			shortUrl,
			longUrl: link
		};
		let newLinks = [ ...links, newLink ];
		setLinks(newLinks);
		console.log(links);
	};
	const postUrl = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/api/url/shorten/', {
				longUrl: link
			})
			.then(function(response) {
				const shortUrl = response.data.shortUrl;
				console.log(shortUrl, random);
				addLink(shortUrl, link);
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	const onChangeHandler = (e) => {
		setLink(e.target.value);
		console.log(link);
	};
	return (
		<section className="linkSection">
			<div className="formDiv">
				<div className="line" />
				<LinkForm onChangeHandler={onChangeHandler} postUrl={postUrl} />
			</div>
			<div className="links">
				{/* <div className="shortenedLinks">
					<div className="longUrl">longUrl</div>
				     <div className="rule"></div>
					<div className="shortUrl">
						<a href="url.com">shortUrl</a> <button className="copyButton">copy</button>
					</div>
				</div>
				<div className="shortenedLinks">
					<div className="longUrl">longUrl</div>
					
					<div className="shortUrl">
						<a href="url.com">shortUrl</a> <button className="copyButton">copy</button>
					</div>
				</div>
			 */}
			
				{/* list goes here */}
				{links ? (
					links.map((link) => {
						return (
							<div className="shortenedLinks" key={link.id}>
								<div className="longUrl">{link.longUrl}</div>
								<div className="rule"></div>
								<div className="shortUrl">
									{link.shortUrl} <button className="copyButton">copy</button>
								</div>
							</div>
						);
					})
				) : null}
			</div>
		</section>
	);
};

export default LinkSection;
