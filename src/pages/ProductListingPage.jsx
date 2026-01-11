import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import plants from '../data/plants';
import './ProductListingPage.css';

function ProductListingPage() {
  // Group plants by category
  const categories = plants.reduce((acc, plant) => {
    if (!acc[plant.category]) {
      acc[plant.category] = [];
    }
    acc[plant.category].push(plant);
    return acc;
  }, {});

  return (
    <div className="product-listing-page">
      <Header />
      <main className="product-main">
        <h1 className="page-title">Our Plants</h1>
        <p className="page-subtitle">
          Discover our collection of beautiful houseplants, carefully selected to bring life and freshness to your home.
        </p>

        {Object.entries(categories).map(([category, categoryPlants]) => (
          <section key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="products-grid">
              {categoryPlants.map((plant) => (
                <ProductCard key={plant.id} plant={plant} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductListingPage;
