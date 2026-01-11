import Header from '../components/Header';
import ProductList from '../components/ProductList';
import './ProductListingPage.css';

function ProductListingPage() {
  return (
    <div className="product-listing-page">
      <Header />
      <main className="product-main">
        <ProductList />
      </main>
    </div>
  );
}

export default ProductListingPage;
