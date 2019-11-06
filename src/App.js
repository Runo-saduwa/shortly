import React, {Fragment} from 'react';
// Components //
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';
import LinkSection from './components/LinkSection/LinkSection';
import './App.css';

function App() {
	return (
		<div className="App">
				<NavBar/>
			<Fragment>
				<Hero/>
				<LinkSection/>
				<AboutSection/>
			</Fragment>
		</div>
	);
}

export default App;
