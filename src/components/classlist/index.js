import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ClassList = () => {
  return (
    <div>
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Class 1</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button href="/classroom" variant="primary">
            Menuju Kelas
          </Button>
          <div className="mt-3">
            <Button className="mr-1" variant="warning" href="/edit/1">
              Edit
            </Button>
            <Button variant="danger" href="/add">
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ClassList;
