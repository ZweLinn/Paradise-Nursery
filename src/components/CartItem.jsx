import './CartItem.css';

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const subtotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <div className="item-image-container">
        <img src={item.image} alt={item.name} className="item-image" />
      </div>
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-price">Unit Price: ${item.price}</p>
      </div>
      <div className="item-quantity">
        <button
          className="quantity-btn"
          onClick={() => onDecrease(item.id)}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="quantity-value">{item.quantity}</span>
        <button
          className="quantity-btn"
          onClick={() => onIncrease(item.id)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <div className="item-subtotal">
        <span className="subtotal-label">Subtotal:</span>
        <span className="subtotal-value">${subtotal}</span>
      </div>
      <button
        className="delete-btn"
        onClick={() => onRemove(item.id)}
        aria-label="Remove item"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
