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
					<p><a href='http://www.heyMarvin.com' target='_blank' rel='noopener noreferrer'>Home Page</a></p>
					<p><a href='https://heymarvin.com/solutions/product-design' target='_blank' rel='noopener noreferrer'>Generator</a></p>
					<p><a href='https://heymarvin.com/pricing' target='_blank' rel='noopener noreferrer'>Pricing-plan</a></p>
					<p><a href='https://heymarvin.com/product/share' target='_blank' rel='noopener noreferrer'>Blog-News</a></p>
					<p><a href='https://heymarvin.com/about-us' target='_blank' rel='noopener noreferrer'>About us</a></p>
					<p><a href='https://heymarvin.com/product/interview-repository' target='_blank' rel='noopener noreferrer'>Features</a></p>
					<p><a href='http://www.heyMarvin.com' target='_blank' rel='noopener noreferrer'>Collection-2023</a></p>
					<p><a href='https://heymarvin.com/contact' target='_blank' rel='noopener noreferrer'>Career</a></p>

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
