import React from 'react';
import './ShoeItem.css';

interface ShoeItemProps {
  shoe: {
    _id: string;
    name: string;
    price: number;
    thumbnail: string; // Add thumbnail to the interface
  };
  addToCart: (shoeId: string) => void;
}

const ShoeItem: React.FC<ShoeItemProps> = ({ shoe, addToCart }) => {
  return (
    <div className="shoe-item">
      <img src={shoe.thumbnail} alt={shoe.name} className="shoe-thumbnail" />
      <h3>{shoe.name}</h3>
      <p>Price: ${shoe.price}</p>
      <button onClick={() => addToCart(shoe._id)}>Add to Cart</button>
    </div>
  );
};

export default ShoeItem;
