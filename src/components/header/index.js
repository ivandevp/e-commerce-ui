import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';


const sections = [
	{
		id: 'home',
		label: 'Home',
	},
	{
		id: 'shop',
		label: 'Shop',
	},
	{
		id: 'template',
		label: 'Template',
	},
	{
		id: 'blog',
		label: 'Blog',
	},
	{
		id: 'contact',
		label: 'Contact',
	},
];

const isHome = id => id === 'home';

const getPath = id => isHome(id) ? '' : id;

const Header = ({ cart }) => (
	<header class={style.header}>
		<h1>Preactishop</h1>
		<nav>
			<ul>
				{sections.map(section => (
					<li>
						<Link activeClassName={style.active} href={`/${getPath(section.id)}`}>
							{section.label}
						</Link>
					</li>
				))}
			</ul>
			<div class={style.cartSummary}>
				Carrito ({cart.length})
				<div class={style.cartDetail}>
					{cart.map((product) => (
						<div>
							<div>
								<img src={product.image} alt={product.title} />
							</div>
							<div>
								<p>{product.title}</p>
								<p>${product.price}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</nav>
	</header>
);

export default Header;
