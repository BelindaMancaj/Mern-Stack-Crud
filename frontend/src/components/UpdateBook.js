import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const UpdateBook = ({ isModalOpen, setIsModalOpen, id }) => {
  console.log(id);
  const [updatedBook, setUpdatedBook] = useState({});
  const myBook = useSelector((state) => state.books.find((b) => b._id === id));
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title="Edit book"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={[
        <Button onClick={handleCancel}>Cancel</Button>,
        <Button
          type="primary"
          form="myForm"
          key="submit"
          htmlType="submit"
          // onClick={onSubmit}
        >
          Save
        </Button>,
      ]}
    >
      {myBook ? (
        <Form
          name="basic"
          //   form={form}
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
              defaultValue={myBook.title}
              // onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
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
              defaultValue={myBook.author}
              // onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
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
            // onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
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
            // onChange={(e) => setNewBook({ ...newBook, pages: e.target.value })}
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
            // onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
            />
          </Form.Item>
        </Form>
      ) : null}
    </Modal>
  );
};

export default UpdateBook;
