import React, { useState } from 'react';
import axios from 'axios';
import LinkForm from '../linkForm/linkForm';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './LinkSection.css';

const LinkSection = () => {
	let random = (Math.random() * 1999).toFixed(1);
	let [ link, setLink ] = useState('');
	let [ links, setLinks ] = useState([]);
	let [copy, setCopy] = useState(false)
	const copied = () => {
	          setCopy(true);
		setTimeout(()=>{
			setCopy(false)
		}, 1000)
	}
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
			.post('https://shortly-backend.herokuapp.com/api/url/shorten/', {
				longUrl: link
			})
			.then(function(response) {
				const shortUrl = response.data.shortUrl;
				console.log(shortUrl, random);
				addLink(shortUrl, link);
				setLink('');
				
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
				<LinkForm onChangeHandler={onChangeHandler} postUrl={postUrl} value={link} />
			</div>
			<div className="links">
				{links ? (
					links.map((link) => {
						return (
							<div className="shortenedLinks" key={link.id}>
								<div className="longUrl">{link.longUrl}</div>
								<div className="rule" />
								<div className="shortUrl">
									{link.shortUrl} 
									<CopyToClipboard
										text={link.shortUrl}
										onCopy={() => console.log('copied')}
									>
					<button onClick={copied} className="copyButton">{copy ? 'copied!!' : 'copy'}</button>
									</CopyToClipboard>
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
