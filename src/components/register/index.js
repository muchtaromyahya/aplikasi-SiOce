import React, { useEffect, useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  // Label,
  Input,
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import './style.css';
// import { setCookie } from '../../utils/cookie';
import { authService } from '../../services';

const RegisterModal = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [sex, setSex] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    document.title = 'Register  Aplikasi-SiOce';
  });

  const cancle = () => {
    return window.location.replace('/login');
  };

  const onSubmit = () => {
    setLoginLoading(true);
    authService
      .login(name, email, birthdate, sex, phone, status, password)
      // .then((res) => {
      // console.log(JSON.stringify(res.token));
      // console.log(JSON.parse(res.token));
      // const cookieToken = res.token;
      // console.log(res)
      // const cookieUser = res.user;
      // setCookie('userID', JSON.stringify(cookieUser), 1000);
      // setCookie('tokenn', JSON.stringify(cookieToken), 1);
      // })
      //   .catch((err) => {
      //     console.log(err);
      //   })
      .finally(() => {
        setLoginLoading(false);
        // history.push('/product');
        window.location.replace('/login');
      });
  };

  return (
    <div>
      <Card className="card">
        <CardBody>
          <CardTitle>Login</CardTitle>
          <Form>
            <FormGroup>
              <div className="row">
                <div className="col-md-3">
                  <h1 className="title">Name</h1>
                </div>
                <div className="col-md-9">
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <div className="row">
                <div className="col-md-3">
                  <h1 className="title">Email</h1>
                </div>
                <div className="col-md-9">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <div className="row">
                <div className="col-md-3">
                  <h1 className="title">Birthdate</h1>
                </div>
                <div className="col-md-9">
                  <Input
                    type="date"
                    name="birthdate"
                    id="birthdate"
                    placeholder="birthdate"
                    onChange={(e) => {
                      setBirthdate(e.target.value);
                    }}
                  />
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <div className="row">
                <div className="col-md-3">
                  <h1 className="title">Sex</h1>
                </div>
                <div className="col-md-9">
                  <Input
                    type="select"
                    name="sex"
                    onChange={(e) => {
                      setSex(e.target.value);
                    }}
                  >
                    <option value="laki laki">Laki Laki</option>
                    <option value="perempuan">Perempuan</option>
                  </Input>
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <div className="row">
                <div className="col-md-3">
                  <h1 className="title">Phone</h1>
                </div>
                <div className="col-md-9">
                  <Input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <div className="row">
                <div className="col-md-3">
                  <h1 className="title">Status</h1>
                </div>
                <div className="col-md-9">
                  <Input
                    type="select"
                    name="status"
                    id="status"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  >
                    <option value="siswa">Siswa</option>
                    <option value="guru">Guru</option>
                  </Input>
                </div>
              </div>
            </FormGroup>
            <div className="row">
              <div className="col-md-3">
                <h1 className="title">Password</h1>
              </div>
              <div className="col-md-9">
                <Input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="button">
              <Button
                className="button-cancel"
                color="danger"
                onClick={cancle}
                disabled={isLoginLoading}
              >
                Cancel
              </Button>
              <Button
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  onSubmit();
                }}
                disabled={isLoginLoading}
              >
                Login
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default RegisterModal;
