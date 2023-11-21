import React from "react";
import './ImageGrid.css';

export const ImageGrid = () => {
	return (
		<div className="image-container">
			<div className="grid-image first">
				<div id="number">
					01
				</div>
				<div className="grid-content-first">
					<div className="grid-content-image">
						<div className="first-image"></div>
						<div className="second-image"></div>
						<div className="third-image"></div>
					</div>
					<div className="grid-content-text">
						<p>Learn from the best mentors</p>
					</div>
					<div className="grid-content-button">
						<div className="button-container-grid">
							<button className="button-text">
								Start Learning
							</button>
							<div className="button-image"></div>
						</div>
					</div>

				</div>
			</div>
			<div className="grid-image second">
				<div id="number">
					02
				</div>
				<div className="grid-content-second">
					<div className="grid-btn">
						<span>Free Edit</span>
						<div className="button-image-second"></div>
					</div>
					<hr />
					<div className="grid-btn">
						<span>Interactive</span>
						<div className="button-image-second"></div>
					</div>
					<hr />
					<div className="grid-btn">
						<span>Easy interface</span>
						<div className="button-image-second"></div>
					</div>
					<hr />
					<div className="grid-btn">
						<span>Compare to other</span>
						<div className="button-image-second"></div>
					</div>
					<hr />
				</div>
			</div>

			<div className="grid-image third">
				<div id="number">
					03
				</div>
				<div className="grid-content-third">
					<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						<div className="grid-text-first">
							<span>+20K</span>
						</div>
						<div className="grid-text-second">
							<span>Glass pattern generated this week in the first release.</span>
						</div>
						<div className="grid-text-third">
							<div className="grid-image-third"></div>
							<div className="grid-image-third"></div>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}