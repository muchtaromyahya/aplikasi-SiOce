import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { updateClassService } from '../../services';

const ModalEditClass = (props) => {
  const [classname, setClassname] = useState('');
  const [description, setDescription] = useState('');
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(namaKelas);
    // console.log(deskripsi);
    // setLoginLoading(true);
    updateClassService
      .updateClass(classname, description)
      .then((res) => {
        console.log(res);
        // const cookieToken = res.token;
        // const cookieUser = res.userId;
        // setCookie('userId', JSON.stringify(cookieUser), 10000);
        // setCookie('token', JSON.stringify(cookieToken), 10000);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setLoginLoading(false);
      });
  };

  return (
    <div>
      <Button variant="primary" onClick={toggle}>
        Edit Kelas
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit Kelas</ModalHeader>
        <ModalBody>
          <div className="container">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nama Kelas</Form.Label>
                <Form.Control
                  value={classname}
                  type="email"
                  placeholder="Ganti nama kelas"
                  onChange={(e) => {
                    setClassname(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control
                  value={description}
                  as="textarea"
                  rows={3}
                  placeholder="Ganti deskripsi kelas"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={onSubmit}
                // disabled={isLoginLoading}
              >
                Simpan Perubahan
              </Button>
            </Form>
          </div>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
};

export default ModalEditClass;
