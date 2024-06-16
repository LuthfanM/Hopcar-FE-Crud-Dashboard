import CarServices from "../services/CarServices";

export const getAllCars = async () => {
  try {
    const cars = await CarServices.getAllCars();
    return cars;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getCarById = async (id: string) => {
  try {
    const car = await CarServices.getCarById(id);
    return car;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const createCar = async (car: { registrationNumber: string; brand: string; model: string; notes: string }) => {
  try {
    const newCar = await CarServices.createCar(car);
    return newCar;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const updateCar = async (id: string, car: { registrationNumber: string; brand: string; model: string; notes: string }) => {
  try {
    const updatedCar = await CarServices.updateCar(id, car);
    return updatedCar;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const deleteCar = async (id: string) => {
  try {
    const response = await CarServices.deleteCar(id);
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
