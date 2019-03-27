import React from 'react';
import ReactDOM from "react-dom";
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Tracker } from "meteor/tracker";
import App from '/imports/ui/App'

let title = "Digital Album"


Meteor.startup(() => {
	Tracker.autorun(() => {
		ReactDOM.render(<App title={title} />, document.getElementById('app'));
	})
});
