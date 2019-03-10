import React from 'react';

function IconDisplay(props) {
		const heartStyle = {
			color: 'hotpink',
			fontSize: '6em',
			marginTop: '20px',
			marginRight: '20px'
		};

		const happyFaceStyle = {
			color: '#ffd700',
			fontSize: '6em',
			marginTop: '20px',
			marginRight: '20px'
		};

		const sadFaceStyle = {
			color: 'blue',
			fontSize: '6em',
			marginTop: '20px',
			marginRight: '20px'
		};

		var emotion;
		if (props.emotion === "happy") {
			emotion = <div>
				<i className="fa fa-smile-o" style={happyFaceStyle}/>
			</div>;
		}
		else {
			emotion = <div>
				<i class="fa fa-frown-o" style={sadFaceStyle} />
			</div>;
		}

		return (
			<div>
				<div>
					<i className="fa fa-heart-o" style={heartStyle}/>
				</div>
				{emotion}
			</div>
		);
}

export default IconDisplay;
