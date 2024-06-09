import apiClient from './apiClient';

const getDeveloperStats = async () => {
  try {
    const response = await apiClient.get('/users'); 
    return response.data[0].data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default getDeveloperStats;