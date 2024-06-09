import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://dummyapi-i7fy9dw0.b4a.run/',             
});

export default apiClient;