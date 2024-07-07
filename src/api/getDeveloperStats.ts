import apiClient from './apiClient';

const getDeveloperStats = async(
  name: string,
  startdate: string,
  enddate: string
) => {
  try {
    const response = await apiClient.get(`/users?name=${name}&startdate=${startdate}&enddate=${enddate}`); 
    return response.data[0].data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default getDeveloperStats;