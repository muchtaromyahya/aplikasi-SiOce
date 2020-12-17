import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './style.css';

const Post = () => {
  return (
    <div>
      <Card className="text-start mt-4">
        <Card.Header>Nama User</Card.Header>
        <Card.Body>
          <Card.Title>Judul Post</Card.Title>
          <Card.Text>Deskripsi Post</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        <Card.Footer className="text-muted">
          1 Desember 2020
          <div className="delete">
            <Button className="mr-3" variant="warning" href="#">
              Edit
            </Button>
            <Button variant="outline-danger" href="#">
              Delete
            </Button>
          </div>
        </Card.Footer>
        {/* <div className="mt-3 ml-auto modal-edit"></div> */}
      </Card>
    </div>
  );
};

export default Post;
