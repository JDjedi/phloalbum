import React from "react";

export default class TitleBar extends React.Component {
	render() {
		return (
			<div className="title-bar">
				<div>
					<h1>{this.props.title}</h1>
					<h2>{this.props.subtitle}</h2>
				</div>
			</div>
		);
	}
}
