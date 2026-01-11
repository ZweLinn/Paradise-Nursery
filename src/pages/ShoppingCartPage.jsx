import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import {
  selectCartItems,
  selectTotalItems,
  selectTotalCost,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../store';
import './ShoppingCartPage.css';

function ShoppingCartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalCost = useSelector(selectTotalCost);

  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality will be available shortly.');
  };

  return (
    <div className="shopping-cart-page">
      <Header />
      <main className="cart-main">
        <h1 className="cart-title">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p className="empty-message">Your cart is empty</p>
            <Link to="/products" className="continue-shopping-btn">
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <div className="summary-item">
                <span className="summary-label">Total Plants:</span>
                <span className="summary-value">{totalItems}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Total Cost:</span>
                <span className="summary-value total-cost">${totalCost}</span>
              </div>
            </div>

            <div className="cart-items">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={(id) => dispatch(increaseQuantity(id))}
                  onDecrease={(id) => dispatch(decreaseQuantity(id))}
                  onRemove={(id) => dispatch(removeFromCart(id))}
                />
              ))}
            </div>

            <div className="cart-actions">
              <Link to="/products" className="continue-shopping-btn">
                Continue Shopping
              </Link>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default ShoppingCartPage;
