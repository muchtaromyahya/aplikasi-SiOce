import React, { useState } from 'react';
import { Button, Container, Form, Jumbotron, Nav } from 'react-bootstrap';
import { Post } from '../../components';
import { createPostService, postService } from '../../services';
import './style_post.css';

const Posts = () => {
  const [judulPost, setJudulPost] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  // const [post, setPost] = useState([]);

  // useEffect(() => {
  //   setUserDataLoading(true);
  postService.post();
  //     .then((res) => {
  //       setPost(res.data);
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
    createPostService.createpost();
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
      <Nav fill variant="tabs" defaultActiveKey="/post">
        <Nav.Item>
          <Nav.Link href="/post">
            <h3>Post</h3>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <h3>Task</h3>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {/* <div className="row">
        <div className="col-md-6">panggil post</div>
        <div className="col-md-6">panggil task</div>
      </div> */}
      <Jumbotron className="mt-4" fluid>
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
      <div>
        {/* {post.map((posts) => {
          return <Post title={posts.title} desciption={posts.desciption} />;
        })} */}
        <Post />
      </div>

      <div className="post-card">aseateryrewyewgdfgasfhdg</div>
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
