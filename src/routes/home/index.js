import { h } from 'preact';
import style from './style';
import HeroImage from '../../components/hero';

const Home = () => (
	<div class={style.home}>
		<HeroImage />
	</div>
);

export default Home;
