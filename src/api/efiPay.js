import axios from 'axios';

export const efiPay = axios.create({
  baseURL: process.env.REACT_APP_EFI_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_EFI_KEY}`
  }
});
