import React, { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { setCookie } from '../../utils/cookie';
import { authService } from '../../services';

const Login = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    document.title = 'DTI Task - Login';
  });

  const toggle = () => {
    return setModal(!modal);
  };

  const onSubmit = () => {
    setLoginLoading(true);
    authService
      .login(username, password)
      .then((res) => {
        // console.log(JSON.stringify(res.token));
        // console.log(JSON.parse(res.token));
        const cookieToken = res.token;
        // const cookieUser = res.user;
        // setCookie('userID', JSON.stringify(cookieUser), 1000);
        setCookie('tokenn', JSON.stringify(cookieToken), 1);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoginLoading(false);
        toggle();
        // history.push('/product');
        window.location.replace('/product');
      });
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Here
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
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
            {/* <Button>Submit</Button> */}
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
      </Modal>
    </div>
  );
};

export default Login;
