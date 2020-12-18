/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './style.css';
import { Card, Button, Accordion, Table } from 'react-bootstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { taskIcon } from '../../assets';

const MainTask = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1>Form tambah tugas</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <Form>
            <FormGroup>
              <Label for="Nama Tugas">Nama Tugas</Label>
              <Input
                type="text"
                name="ntugas"
                id="ntugas"
                placeholder="Nama Tugas"
                // onChange={(e) => {
                //   setUsername(e.target.value);
                // }}
              />
            </FormGroup>
            <FormGroup>
              <label className="form-label" htmlFor="textAreaExample">
                Deskripsi
              </label>
              <textarea
                className="form-control"
                id="textAreaExample"
                rows="4"
              />
            </FormGroup>
            <FormGroup>
              <div className="input-group mb-3">
                <div className="custom-file">
                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile01"
                  >
                    Choose file
                  </label>
                  <Input
                    type="file"
                    class="custom-file-input"
                    id="inputGroupFile01"
                    // onChange={(e) => {
                    //   setUsername(e.target.value);
                    // }}
                  />
                </div>
              </div>
            </FormGroup>
          </Form>
        </div>
      </div>
      <Accordion>
        <Card className="pb-3">
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="0"
            className="head text-decoration-none"
          >
            <Card.Header>
              <div className="row text-left ">
                <div className="col-1">
                  <img src={taskIcon} alt="img" className="iconTask" />
                </div>
                <div className="col">
                  <h6 className="head mt-2">Table Data Tugas</h6>
                </div>
              </div>
            </Card.Header>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="asd">
              <div className="row">
                <div className="col">
                  <h6>Data Tugas</h6>
                </div>
              </div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="pb-3">
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="1"
            className="head text-decoration-none"
          >
            <Card.Header>
              <div className="row text-left ">
                <div className="col-1">
                  <img src={taskIcon} alt="img" className="iconTask" />
                </div>
                <div className="col">
                  <h6 className="head mt-2">Table Submit Tugas</h6>
                </div>
              </div>
            </Card.Header>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="asd">
              <div className="row">
                <div className="col">
                  <h6>Data Tugas</h6>
                </div>
              </div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default MainTask;
