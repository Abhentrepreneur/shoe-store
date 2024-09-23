import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CartPage.css'; // Updated CSS file

const API_URL = 'https://shoe-store-be-flame.vercel.app/api';

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<any>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(`${API_URL}/cart`, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        setCart(response.data);
        const total = response.data.shoes.reduce((sum: number, shoe: any) => sum + shoe.price, 0);
        setTotalPrice(total);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCheckout = () => {
    const token = localStorage.getItem('token');
    axios
      .post(
        `${API_URL}/order`,
        { cartId: cart._id },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => toast.success('Order placed successfully!'))
      .catch((error) => console.error(error));
  };

  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-hero-section">
        <h1 className="cart-hero-title">Your Cart</h1>
        <p className="cart-intro-text">Review the shoes you've selected and complete your purchase.</p>
      </div>
      <div className="cart-list">
        {cart ? (
          <div className="cart-items-container">
            <ul className="cart-list-items">
              {cart.shoes.map((shoe: any) => (
                <li key={shoe._id} className="cart-item">
                  <img src={shoe.thumbnail} alt={shoe.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <p>{shoe.name}</p>
                    <p>${shoe.price}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <h3>Total Price: ${totalPrice}</h3>
              <button className="checkout-button" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="no-items">please add some shoes yaar</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default CartPage;
