import axios from 'axios';

const API = 'http://localhost:5000/api/payment';

export const createOrder = async (amount) => {
  const response = await axios.post(`${API}/create-order`, {
    amount
  });

  return response.data;
};