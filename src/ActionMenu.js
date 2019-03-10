import React, { Component } from 'react';

class ActionMenu extends Component {
	render() {
		const cameraStyle = {
			color: 'darkgrey',
			marginTop: '20px',
			fontSize: '5em',
			marginLeft: '20px'
		};

		return (
			<div>
				<i className="fa fa-camera" style={cameraStyle} />
			</div>
		);
	}
}

export default ActionMenu;
