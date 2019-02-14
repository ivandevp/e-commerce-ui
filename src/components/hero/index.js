import { h } from 'preact';
import style from './style';


const HeroImage = () => (
    <div class={style.hero}>
        <div class={style.message}>
            <h2>Encuentra tu outfit</h2>
            <ul>
                <li>Diseño millenial</li>
                <li>Nadie te juzga</li>
                <li>Empodera tu estilo</li>
            </ul>
        </div>
    </div>
);

export default HeroImage;