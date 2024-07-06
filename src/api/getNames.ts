import apiClient from './apiClient';

const getNames = async() => {
  try {
    const response = await apiClient.get(`/get-names`); 
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default getNames;