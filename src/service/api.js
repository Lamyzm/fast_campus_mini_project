import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://fcbe-mini-project.kro.kr:8080/api',
})

