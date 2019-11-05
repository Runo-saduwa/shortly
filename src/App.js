import React, {Fragment} from 'react';
// Components //
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
	return (
		<div className="App">
				<NavBar/>
			<Fragment>
				<Hero/>
			</Fragment>
		</div>
	);
}

export default App;
