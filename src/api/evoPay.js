import axios from 'axios';

export const evoPay = axios.create({
  baseURL: process.env.REACT_APP_EVOPAY_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_EVOPAY_KEY}`
  }
});
