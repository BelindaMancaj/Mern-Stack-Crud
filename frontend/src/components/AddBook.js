import React, { useState } from "react";
import { Button, Modal, Form, Input, InputNumber } from "antd";
import Axios from "axios";
import "./AddBook.scss";
import { useDispatch } from "react-redux";
import { createBook } from "../actions/books";

const AddBook = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    pages: "",
    price: "",
  });

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const postData = async (val) => {
    Axios.post("http://localhost:8000/api/addBook", val)
      .then((res) => console.log("Data send"))
      .catch((err) => console.log(err.data));
  };

  const onFinish = (values) => {
    // e.preventDefault();
    dispatch(createBook(values));

    // postData(values);
    // form.resetFields();
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createBook(newBook));
    setIsModalOpen(false);
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
          <Button
            type="primary"
            form="myForm"
            key="submit"
            htmlType="submit"
            onClick={onSubmit}
          >
            Add
          </Button>,
        ]}
      >
        <Form
          name="basic"
          form={form}
          id="myForm"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          // onFinish={onFinish}
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
            <Input
              onChange={(e) =>
                setNewBook({ ...newBook, title: e.target.value })
              }
            />
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
            <Input
              onChange={(e) =>
                setNewBook({ ...newBook, author: e.target.value })
              }
            />
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
            <Input
              onChange={(e) =>
                setNewBook({ ...newBook, genre: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Pages"
            name="pages"
            // rules={[
            //   {
            //     type: "number",
            //     min: 0,
            //   },
            // ]}
          >
            <Input
              onChange={(e) =>
                setNewBook({ ...newBook, pages: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                type: "number",
                min: 0,
              },
            ]}
          >
            <Input
              onChange={(e) =>
                setNewBook({ ...newBook, price: e.target.value })
              }
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddBook;
