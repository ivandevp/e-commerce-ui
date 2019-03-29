import { h, Component } from 'preact';
import style from './style';
import HeroImage from '../../components/hero';
import Product from '../../components/product';

const { ProductList } = Product;

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			products: [],
		};
	}

	componentDidMount() {
		fetch('http://localhost:5678/products')
			.then(resp => resp.json())
			.then((products) => {
				this.setState({
					products
				});
			})
			.catch(error => console.error(error));
	}


	render() {
		return (
			<div class={style.home}>
				<HeroImage />
				<ProductList
					onAddToCart={this.props.onClick}
					products={this.state.products}
				/>
			</div>
		);
	}
}

export default Home;
