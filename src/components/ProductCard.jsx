import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../store';
import './ProductCard.css';

function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Check if item is already in cart
  const isInCart = cartItems.some(item => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={plant.image} alt={plant.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{plant.name}</h3>
        <p className="product-description">{plant.description}</p>
        <p className="product-price">${plant.price}</p>
        <button
          className={`add-to-cart-btn ${isInCart ? 'added' : ''}`}
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
