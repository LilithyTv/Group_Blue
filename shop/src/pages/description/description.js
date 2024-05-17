import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="text-center p-10">
      <h1 className="font-bold text-4xl mb-4">Responsive Product Card Grid</h1>
      <h2 className="text-3xl">Tailwind CSS</h2>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      <div className="text-center py-10 px-10">
        <h2 className="font-bold text-2xl md:text-4xl mb-4">
          Thanks to{' '}
          <a
            href="https://unsplash.com/@nixcreative"
            className="underline font-black"
          >
            Tyler Nix
          </a>{' '}
          for those AMAZING product images!
        </h2>
      </div>
    </div>
  );
};

export default ProductsPage;
