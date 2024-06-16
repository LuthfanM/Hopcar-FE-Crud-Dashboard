import axios from 'axios';
import { CARS_ENDPOINT } from '../endpoint';

const CarServices = {
  getAllCars: async () => {
    const response = await axios.get(CARS_ENDPOINT);
    return response.data;
  },

  getCarById: async (id: string) => {
    const response = await axios.get(`${CARS_ENDPOINT}/${id}`);
    return response.data;
  },

  createCar: async (car: { registrationNumber: string; brand: string; model: string; notes: string }) => {
    const response = await axios.post(CARS_ENDPOINT, car);
    return response.data;
  },

  updateCar: async (id: string, car: { registrationNumber: string; brand: string; model: string; notes: string }) => {
    const response = await axios.patch(`${CARS_ENDPOINT}/${id}`, car);
    return response.data;
  },

  deleteCar: async (id: string) => {
    const response = await axios.delete(`${CARS_ENDPOINT}/${id}`);
    return response.data;
  },
};

export default CarServices;
