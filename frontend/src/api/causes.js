import axios from "axios";

const API = "https://online-donation-platform-vnkj.onrender.com";

export const getAllCauses = async () => {
  const response = await axios.get(API);

  return response.data;
};
