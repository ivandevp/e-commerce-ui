import { h } from 'preact';
import styles from './style.css';


const Product = ({ product, onAddToCart } ) => (
    <li class={styles.product}>
        <strong class={styles.title}>{product.title}</strong>
        <span class={styles.author}> by {product.author}</span>
        <img class={styles.image} src={product.image} alt={product.title} />

        <p>
            Available: {product.stock} units <br />
            You can get one by ${product.price}
        </p>

        <button
            class={styles.addToCart}
            onClick={() => {
                onAddToCart(product);
            }}
        >
            Add to cart
        </button>
    </li>
);

export default Product;