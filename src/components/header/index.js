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

const Header = () => (
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
			<div>
				Icons
			</div>
		</nav>
	</header>
);

export default Header;
