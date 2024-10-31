import axios from 'axios';

export const dataInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_LINK}`,
  headers: {
    'Content-Type': 'application/json'
  }
});