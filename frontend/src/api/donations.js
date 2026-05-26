import axios from 'axios';

const API = 'http://localhost:5000/api/donations';

export const saveDonation = async (donationData) => {
  const response = await axios.post(API, donationData);
  return response.data;
};