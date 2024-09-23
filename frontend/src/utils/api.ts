import axios from 'axios';

// Set your backend API URL here
const API_URL = 'https://shoe-store-be-flame.vercel.app/api'; // Update this to your backend URL

export const getShoes = async () => {
  try {
    const response = await axios.get(`${API_URL}/shoes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching shoes:', error);
    throw error;
  }
};

export const addToCart = async (shoeId: string) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.post(
      `${API_URL}/cart/add`,
      { shoeId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};
