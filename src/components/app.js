import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			cart: [],
		};
	}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	handleAddToCart = product => {
		this.setState({
			cart: [
				...this.state.cart,
				product
			]
		});
	}

	render() {
		const { cart } = this.state;
		return (
			<div id="app">
				<Header cart={cart} />
				<Router onChange={this.handleRoute}>
					<Home cart={cart} onClick={this.handleAddToCart} path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
