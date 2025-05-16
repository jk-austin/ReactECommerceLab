import React from 'react';
import './ProductList.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './CartSlice';

const ProductList = () => {
    const dispatch = useDispatch();
    
    const cartItems = useSelector(state => state.cart.cartItems);

    const handleAddToCart = product => {
        dispatch(addItemToCart(product));
    };

  const products = [
    { id: 1, name: 'Zombie Costume', price: 60 },
    { id: 2, name: 'Skeleton Costume', price: 75 },
    { id: 3, name: 'Zombie-Skeleton Costume', price: 80 },
    { id: 4, name: 'Skeletorch Costume', price: 90 },
    { id: 5, name: 'Zomb-Fire Costume', price: 90 },
  ];

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
     {products.map(product => (
        <li key={product.id} className="product-list-item">
            <span>{product.name} - ${product.price}</span>
            <button
                className={`add-to-cart-btn ${cartItems.some(item => item.id === product.id) ? 'disabled' : ''}`}
                onClick={() => handleAddToCart(product)}
                disabled={cartItems.some(item => item.id === product.id)}>   
                {cartItems.some(item => item.id === product.id) ? 'Added' : 'Add to Cart'}
            </button>
        </li>
     ))}
      </ul>
    </div>
  );
};

export default ProductList;
