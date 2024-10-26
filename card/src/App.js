import React from 'react';

import ProductCard from './components/ProductCard';

function App() {
  const product = {
    title: 'Polyester Standard Length Winter Jacket For Men Quilted..',
    brand: 'Boldfit',
    price: 1799,
    originalPrice: 3999,
    discount: 55,
    rating: 4,
    reviews: 947,
    isSponsored: true,
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    primeDeliveryDate: 'Tuesday, 29 October',
    specialMessage: 'Arrives before Diwali',
  };

  return (
    <div className="app">
      <ProductCard product={product} />
    </div>
  );
}

export default App;
