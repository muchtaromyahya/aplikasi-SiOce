import React, { useEffect, useState } from 'react';
import {
  Button,
  // Modal,
  // ModalHeader,
  // ModalBody,
  // ModalFooter,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  // Label,
  Input,
} from 'reactstrap';
import './style2.css';
import { setCookie } from '../../utils/cookie';
import { authService } from '../../services';
// import { Header } from '../index';

const Login = () => {
  // const { className } = props;

  // const [modal, setModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    document.title = 'Login  Aplikasi-SiOce';
  });

  // const toggle = () => {
  //   return setModal(!modal);
  // };
  const cancle = () => {
    return window.location.replace('/home');
  };

  const register = () => {
    return window.location.replace('/register');
  };

  const onSubmit = () => {
    setLoginLoading(true);
    authService
      .login(username, password)
      .then((res) => {
        // console.log(JSON.stringify(res));
        // console.log(JSON.parse(res.token));
        const cookieToken = res.data.token;
        // const userName = res.data.user.name;11
        // const status = res.data.user.status;
        const userData = {
          id: res.data.id,
          name: res.data.nama,
          status: res.data.statusType,
        };
        setCookie('token', JSON.stringify(cookieToken), 1000);
        setCookie('userData', JSON.stringify(userData), 1000);
        // console.log(userData)

        // console.log(res)
        // setCookie('userID', JSON.stringify(cookieUser), 1000);
        // Header(res.data.name);
        // setCookie('token', JSON.stringify(cookieToken), 1000);
        // setCookie('name', JSON.stringify(userName), 1000);
        // setCookie('status', JSON.stringify(status), 1000);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoginLoading(false);
        // toggle();
        // history.push('/product');
        window.location.replace('/classes');
      });
  };

  return (
    <div className="login">
      {/* <Button color="primary" onClick={toggle}>
        Here
      </Button> */}
      <Card className="card">
        <CardBody>
          <CardTitle>Login</CardTitle>
          <Form>
            <FormGroup>
              {/* <Label for="username">Username</Label> */}
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              {/* <Label for="password">Password</Label> */}
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormGroup>
            {/* <Button>Submit</Button> */}
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
            <span className="register">
              <Button className="btn-outline-secondary" onClick={register}>
                Register
              </Button>
            </span>
          </Form>
        </CardBody>
      </Card>
      {/* <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle} disabled={isLoginLoading}>
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
        </ModalFooter>
      </Modal> */}
    </div>
  );
};

export default Login;
