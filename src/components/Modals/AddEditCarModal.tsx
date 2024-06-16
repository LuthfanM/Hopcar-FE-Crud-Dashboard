import React, { useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd';

interface AddEditCarModalProps {
  visible: boolean;
  car?: { id?: number; registrationNumber: string; brand: string; model: string; notes: string };
  onSubmit: (car: { registrationNumber: string; brand: string; model: string; notes: string }) => void;
  onCancel: () => void;
}

const AddEditCarModal: React.FC<AddEditCarModalProps> = ({ visible, car, onSubmit, onCancel }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (car) {
      form.setFieldsValue(car);
    } else {
      form.resetFields();
    }
  }, [car, form]);

  const handleOk = () => {
    form.validateFields().then(values => {
      onSubmit(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      title={car ? 'Edit Car' : 'Add Car'}
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          {car ? 'Update' : 'Add'}
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="registrationNumber"
          label="Car Registration Number"
          rules={[{ required: true, message: 'Please enter the car registration number' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="brand"
          label="Car Brand"
          rules={[{ required: true, message: 'Please enter the car brand' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="model"
          label="Car Model"
          rules={[{ required: true, message: 'Please enter the car model' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="notes" label="Notes">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddEditCarModal;
