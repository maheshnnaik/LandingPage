import React from 'react';
import './App.css';
import { Title } from './Title';
import { ImageGrid } from './ImageGrid';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div style={{padding: '5px'}}>
					<span id='title'>AIPatrn</span>
				</div>
				<div id="listlink">
					<a><p>Home Page</p></a>
					<a><p>Generator</p></a>
					<a><p>Pricing-plan</p></a>
					<a><p>Blog-News</p></a>
					<a><p>About us</p></a>
					<a><p>Features</p></a>
					<a><p>Collection-2023</p></a>
					<a><p>Career</p></a>

				</div>
				<div className='menu'>
					<select id='menu-dropdown' name='menu'>
						<option value="Menu">Menu</option>
						<option value="About">About</option>
						{/* <option value="mercedes">Mercedes</option>
						<option value="audi">Audi</option> */}
					</select>
				</div>
			</header>
			<Title />
			<ImageGrid />
		</div>
	);
}

export default App;
