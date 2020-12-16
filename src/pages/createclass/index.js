import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const CreateClass = () => {
  const [namaKelas, setNamaKelas] = useState('');
  // const [deskripsi, setDeskripsi] = useState('');

  // const [isLoading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(namaKelas);
    // setLoginLoading(true);
    // authService
    //   .login(username, password)
    //   .then((res) => {
    //     console.log(res);
    //     const cookieToken = res.token;
    //     const cookieUser = res.userId;
    //     setCookie('userId', JSON.stringify(cookieUser), 10000);
    //     setCookie('token', JSON.stringify(cookieToken), 10000);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     setLoginLoading(false);
    //   });
  };
  return (
    <div className="container">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nama Kelas</Form.Label>
          <Form.Control
            type="email"
            placeholder="Masukan nama kelas"
            onChange={(e) => {
              setNamaKelas(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Masukan deskripsi kelas"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={onSubmit}
          // disabled={isLoginLoading}
        >
          Buat Kelas
        </Button>
        <Button
          className="ml-2"
          href="/listclass"
          variant="danger"
          type="submit"
        >
          Batal
        </Button>
      </Form>
    </div>
  );
};

export default CreateClass;
