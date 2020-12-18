import React from 'react';
import { Button, Card } from 'react-bootstrap';
import ModalEditClass from '../modal-editclass';
import './style2.css';

const ClassList = ({ title, desciption }) => {
  return (
    <div>
      <Card style={{ width: '20rem' }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desciption}</Card.Text>
          <Button href="/post" variant="primary">
            Menuju Kelas
          </Button>
          <div className="mt-3 modal-edit">
            <ModalEditClass />
            <Button variant="danger" href="#">
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ClassList;
