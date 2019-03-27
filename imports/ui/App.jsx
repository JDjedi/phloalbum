import React from 'react';
import Hello from './Hello';
import Titlebar from './Titlebar'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Titlebar title={this.props.title} subtitle="Created by Jonathan Diaz"/>
				<div>
					<Hello />
				</div>			
			</div>
		)
	}
}