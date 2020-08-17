import React, { Component } from 'react'
// import Video from './Video'
import LandingPage from './routes/landingPage/landingPage';
import Permission from './routes/permission/permission';
import Room from './routes/room/room';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
// import './routes/room/node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/" exact component={LandingPage} />
						<Route path="/web/:meet/:pwd" exact component={Permission} />
						<Route path="/room" component={Room} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App;