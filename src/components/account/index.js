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
import './styleAccount.css';
import { getCookie } from '../../utils/cookie';
import { userService } from '../../services';
// import { useParams } from 'react-router-dom';

const Account = () => {
  // const [userData, setUserData] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [sex, setSex] = useState('');
  const [phone, setPhone] = useState('');
  const [statusType, setStatus] = useState('');
  //   const [password, setPassword] = useState('');
  const [isLoginLoading, setLoginLoading] = useState(false);

  const cancle = () => {
    return window.location.replace('/classes');
  };
  function getId() {
    if (getCookie('userData')) {
      // console.log(JSON.parse(getCookie('data')).id);
      const data = JSON.parse(getCookie('userData')).id;
      return data;
    }
    return '';
  }
  const id = `${getId()}`;

  useEffect(() => {
    document.title = 'Account  Aplikasi-SiOce';
    userService.getUser(id).then((res) => {
      // console.log('then', res.userId);
      // setUserData(res);
      setName(res.nama);
      setEmail(res.email);
      setBirthdate(res.birthdate);
      setSex(res.sex);
      setPhone(res.phone);
      setStatus(res.statusType);
      // console.log(res);
      // console.log(userData);
    });
    // .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //       console.log('data');
    //     });
  }, [id]);
  const onSubmit = () => {
    setLoginLoading(true);
    userService
      .updateUser(id, name, email, birthdate, sex, phone, statusType)
      // .res((res) => {
      //   const data = res;
      //   // alert(data)
      // })
      // // .then((res) => {
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
        window.location.replace('/classes');
        // document.title = 'Register  Aplikasi-SiOce';
      });
  };

  return (
    <div>
      <Card className="card">
        <CardBody>
          <CardTitle>Edit Data</CardTitle>
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
                    value={name}
                    placeholder="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  {/* <input></input> */}
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
                    value={email}
                    placeholder="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
            </FormGroup>
            {/* <FormGroup>
              <div className="row">
                <div className="col-md-3">
                  <h1 className="title">Birthdate</h1>
                </div>
                <div className="col-md-9">
                  <Input
                    type="date"
                    name="birthdate"
                    id="birthdate"
                    value={birthdate}
                    placeholder="birthdate"
                    onChange={(e) => {
                      setBirthdate(e.target.value);
                    }}
                  />
                </div>
              </div>
            </FormGroup> */}
            <FormGroup>
              <div className="row">
                <div className="col-md-3">
                  <h1 className="title">Sex</h1>
                </div>
                <div className="col-md-9">
                  <Input
                    type="select"
                    name="sex"
                    id="sex"
                    value={sex}
                    onChange={(e) => {
                      setSex(e.target.value);
                    }}
                  >
                    <option value="-">---- Sex ----</option>
                    <option value="perempuan">Perempuan</option>
                    <option value="laki-laki">Laki Laki</option>
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
                    value={phone}
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
                    value={statusType}
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  >
                    <option value="-">---- Status ----</option>
                    <option value="Siswa">Siswa</option>
                    <option value="Guru">Guru</option>
                  </Input>
                </div>
              </div>
            </FormGroup>
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
                Edit
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Account;
