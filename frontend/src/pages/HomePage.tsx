import React, { useEffect, useState } from 'react';
import ShoeItem from '../components/ShoeItem';
import Navbar from '../components/Navbar';
import { getShoes, addToCart } from '../utils/api';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    getShoes().then((data) => setShoes(data));
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <div className="hero-section">
        <h1 className="hero-title">Shoes Collection</h1>
        <p className="intro-text">Discover our exclusive range of stylish and comfortable shoes!</p>
        <button className="explore-button">Explore More Shoes</button>
      </div>
      <div className="shoe-list">
        {shoes.length > 0 ? (
          shoes.map((shoe: any) => (
            <ShoeItem key={shoe._id} shoe={shoe} addToCart={addToCart} />
          ))
        ) : (
          <p className="no-shoes">No shoes available. Please check back later!</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
