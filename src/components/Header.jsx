import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalItems } from '../store';
import './Header.css';

function Header() {
  const totalItems = useSelector(selectTotalItems);
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Paradise Nursery
        </Link>
        <nav className="nav">
          {location.pathname !== '/products' && (
            <Link to="/products" className="nav-link">
              Products
            </Link>
          )}
          {location.pathname !== '/cart' && (
            <Link to="/cart" className="nav-link cart-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
