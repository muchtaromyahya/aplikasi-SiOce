import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './style_post.css';

const Post = () => {
  return (
    <div>
      {/* <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <Card style={{ width: '50rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
      <Card className="text-start mt-4">
        <Card.Header>Nama User</Card.Header>
        <Card.Body>
          <Card.Title>Judul Post</Card.Title>
          <Card.Text>Deskripsi Post</Card.Text>
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
      </Card>
    </div>
  );
};

export default Post;
