import React, { useState } from "react";
import { Table, Button, Space } from "antd";
import {
  getAllCars,
  createCar,
  updateCar,
  deleteCar,
} from "../../axios/actions/CarActions";
import AddEditCarModal from "../Modals/AddEditCarModal";

const CarComponent: React.FC = () => {
  const [cars, setCars] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingCar, setEditingCar] = useState(null);
  
  React.useEffect(() => {
    const fetchCars = async () => {
      const data = await getAllCars();
      setCars(data);
    };

    fetchCars();
  }, []);

  const handleAddCar = async (car) => {
    const newCar = await createCar(car);
    setCars([...cars, newCar]);
    setIsModalVisible(false);
  };

  const handleEditCar = async (id, car) => {
    const updatedCar = await updateCar(id, car);
    setCars(cars.map((c) => (c.id === id ? updatedCar : c)));
    setEditingCar(null);
    setIsModalVisible(false);
  };

  const handleDeleteCar = async (id) => {
    await deleteCar(id);
    setCars(cars.filter((car) => car.id !== id));
  };

  const openModal = (car = null) => {
    setEditingCar(car);
    setIsModalVisible(true);
  };

  const columns = [
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Car Registration Number",
      dataIndex: "registrationNumber",
      key: "registrationNumber",
    },
    {
      title: "Car Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Car Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => openModal(record)}>Edit</Button>
          <Button danger onClick={() => handleDeleteCar(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={cars}
        pagination={{ position: ["bottomCenter"] }}
      />
      <Button type="primary" onClick={() => openModal()}>
        Add Car
      </Button>
      <AddEditCarModal
        visible={isModalVisible}
        car={editingCar}
        onSubmit={(car) => {
          if (editingCar) {
            handleEditCar(editingCar.id, car);
          } else {
            handleAddCar(car);
          }
        }}
        onCancel={() => setIsModalVisible(false)}
      />
    </>
  );
};

export default CarComponent;
