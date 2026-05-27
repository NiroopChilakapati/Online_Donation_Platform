import axios from "axios";

const API = "https://online-donation-platform-vnkj.onrender.com";

export const saveDonation = async (donationData) => {
  const response = await axios.post(API, donationData);
  return response.data;
};
