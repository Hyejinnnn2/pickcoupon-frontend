// src/api/storeApi.js
import axios from 'axios';

export async function fetchStoreData(userId = 1) {
  const BASE_URL =
    'http://pickcoupon-app-env.eba-pkfhnrry.ap-northeast-2.elasticbeanstalk.com';
  const { data } = await axios.get(`${BASE_URL}/api/recommendations`, {
    params: { userId },
    // withCredentials: false,        // (기본값 false지만 혹시 세팅했다면 꺼두기)
    // headers: undefined,            // Accept/Content-Type도 굳이 안 보냄
  });
  return data; // { message, stores }
}
