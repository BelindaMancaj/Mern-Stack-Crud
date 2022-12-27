import React, { useState } from "react";
import { Button, Modal, Form, Input, InputNumber } from "antd";
import "./AddBook.scss";

const AddBook = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Button className="add-btn" type="primary" onClick={showModal}>
        Add new book +
      </Button>
      <Modal
        title="Adding a new book"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button onClick={handleCancel}>Cancel</Button>,
          <Button key="3" type="primary" htmlType="submit">
            Add
          </Button>,
        ]}
      >
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                message: "Please input the title!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Author"
            name="author"
            rules={[
              {
                message: "Please input the author!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Genre"
            name="genre"
            rules={[
              {
                message: "Please input the genre!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Pages"
            name="pages"
            rules={[
              {
                message: "Please input the pages number!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                message: "Please input the price!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddBook;
