import React, { useState } from 'react';
import { Button, Container, Form, Jumbotron } from 'react-bootstrap';
// import { Post } from '../../components';
import './style_post.css';

const Posts = () => {
  const [judulPost, setJudulPost] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  // useEffect(() => {
  //   setUserDataLoading(true);
  //   productService
  //     .Product(50, 0, '')
  //     .then((res) => {
  //       setProduct(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       return console.log(err);
  //     })
  //     .finally(() => {
  //       setUserDataLoading(false);
  //     });
  // }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(judulPost);
    // console.log(deskripsi);
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

  const onCancel = () => {
    setJudulPost('');
    setDeskripsi('');
  };
  return (
    <div className="post">
      <Jumbotron fluid>
        <Container>
          <h1>Nama Kelas</h1>
          <p>
            Deskripsi kelas : This is a modified jumbotron that occupies the
            entire horizontal space of its parent.
          </p>
        </Container>
      </Jumbotron>
      <div className="inputpost">
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              value={judulPost}
              type="email"
              placeholder="Masukan judul Post"
              onChange={(e) => {
                // console.log(e.target.value);
                setJudulPost(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              value={deskripsi}
              as="textarea"
              rows={3}
              placeholder="Deskripsi"
              onChange={(e) => {
                setDeskripsi(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Kirim
          </Button>
          <Button className="ml-3" variant="outline-danger" onClick={onCancel}>
            Batal
          </Button>
        </Form>
      </div>
      {/* <Post />
      <Post />
      <Post /> */}
    </div>
  );
  //   const dataPosting = list.map((data) => {
  //     return (
  //       <div className="boxPosting" key={data.id}>
  //         <div className="boxMain">
  //           <div className="boxProfile">
  //             <h1>{data.name}</h1>
  //             <p>{data.time}</p>
  //           </div>
  //           <div className="action">
  //             <div className="btnAction">
  //               <img src={edit} alt="edit" />
  //             </div>
  //             <div className="btnAction">
  //               <img src={hapus} alt="delete" />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="boxText">
  //           <p>{data.text}</p>
  //         </div>
  //       </div>
  //     );
  // });

  // return (
  //   <div id="containerPosting">
  //     {dataPosting}
  //     <Coments />
  //   </div>
  // );
};

export default Posts;
