# Paradise Nursery - Houseplant E-Commerce Application

A React-based e-commerce application for selling houseplants, built as a course project.

## Features

### Landing Page
- Full-screen background image with nature theme
- Company branding (Paradise Nursery)
- Company description and tagline
- "Get Started" button linking to the product catalog

### Product Listing Page
- 9 houseplants organized into 3 categories:
  - **Air Purifying Plants**: Snake Plant, Peace Lily, Spider Plant
  - **Low Light Plants**: Pothos, ZZ Plant, Philodendron
  - **Succulents & Cacti**: Aloe Vera, Jade Plant, Echeveria
- Each plant displays:
  - Thumbnail image
  - Plant name
  - Price
  - Add to Cart button
- Responsive grid layout

### Shopping Cart Page
- Displays all items in cart with:
  - Thumbnail image
  - Plant name
  - Unit price
  - Quantity controls (increase/decrease buttons)
  - Item subtotal
  - Delete button
- Shows total number of plants in cart
- Shows total cost of all items
- "Continue Shopping" button
- "Checkout" button

### Header Component
- Sticky navigation header
- Company logo linking to home
- Shopping cart icon with dynamic item count badge
- Navigation links (conditional based on current page)

## Tech Stack

- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server
- **CSS** - Styling (component-based CSS files)

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Header.css
│   ├── ProductCard.jsx
│   └── ProductCard.css
├── pages/
│   ├── LandingPage.jsx
│   ├── LandingPage.css
│   ├── ProductListingPage.jsx
│   ├── ProductListingPage.css
│   ├── ShoppingCartPage.jsx
│   └── ShoppingCartPage.css
├── context/
│   └── CartContext.jsx
├── data/
│   └── plants.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository or download the project files

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Routes

| Path | Page |
|------|------|
| `/` | Landing Page |
| `/products` | Product Listing Page |
| `/cart` | Shopping Cart Page |

## State Management

The application uses React Context API (`CartContext`) for managing shopping cart state across components. The context provides:

- `cartItems` - Array of items in cart
- `addToCart(plant)` - Add item to cart
- `removeFromCart(plantId)` - Remove item from cart
- `increaseQuantity(plantId)` - Increase item quantity
- `decreaseQuantity(plantId)` - Decrease item quantity
- `getTotalItems()` - Get total number of items
- `getTotalCost()` - Get total cost of all items
