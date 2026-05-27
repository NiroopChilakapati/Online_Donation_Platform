import axios from "axios";

const API = "https://online-donation-platform-vnkj.onrender.com";

export const createOrder = async (amount) => {
  const response = await axios.post(`${API}/create-order`, {
    amount,
  });

  return response.data;
};
