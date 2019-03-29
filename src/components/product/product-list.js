import { h } from 'preact';
import Product from './product';
import styles from './style.css';


const ProductList = ({ products, onAddToCart } ) => (
    <div class={styles.container}>
        <h2>Productos</h2>
        <ul>
            {products.map((product) => (
                <Product product={product} onAddToCart={onAddToCart} />
            ))}
        </ul>
    </div>
);

export default ProductList;