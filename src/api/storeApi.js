import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE;

export async function fetchStoreData(userId = 1) {
  const { data } = await axios.get(`${BASE_URL}/api/recommendations`, {
    params: { userId },
  });
  return data;
}
