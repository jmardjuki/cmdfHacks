import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class IconDisplay extends Component {

	render() {
		const heartStyle = {
			color: 'hotpink',
			fontSize: '6em',
			marginTop: '20px',
			marginRight: '20px'
		};

		const faceStyle = {
			color: '#ffd700',
			fontSize: '6em',
			marginTop: '20px',
			marginRight: '20px'
		};

		return (
			<div>
				<div>
					<i className="fa fa-heart-o" style={heartStyle}/>
				</div>
				<div>
					<i className="fa fa-smile-o" style={faceStyle}/>
				</div>
			</div>
		);
	}
}

export default IconDisplay;
