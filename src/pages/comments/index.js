import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './style_comments.css';
import {
  commentsService,
  createComments,
  // getUserComments
} from '../../services';

function formatDate(string) {
  const options = {
    years: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(string).toLocaleDateString([], options);
}

const Comments = () => {
  const [getComments, setGetComments] = useState([]);
  const [comment, setComment] = useState('');
  // const [id, setId] = useState('');
  // const [nameUser, setNameUser] = useState('');
  const [
    postingId,
    // setPostingId
  ] = useState('');
  const [
    userId,
    // setUserId
  ] = useState('');

  useEffect(() => {
    commentsService
      .CommentsService()
      .then((res) => {
        setGetComments(res);
      })
      .catch((err) => {
        return console.log(err);
      });
    // .finally(() => {
    //   setIsLoading(false);
    // });
  }, []);

  // function getNameUser(cekId) {
  //   getUserComments
  //     .GetUserComments(cekId)
  //     .then((res) => {
  //       setNameUser(res.name);
  //     });
  // }

  const onSubmit = (e) => {
    e.preventDevault();
    createComments
      .CreateComments(postingId, userId, getComments)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        return console.log(err);
      });
    // .finally(() => {
    //   setIsLoading(false);
    // });
  };

  const listComment = getComments.map((data) => {
    console.log(data);
    const date = formatDate(data.createdAt);
    console.log(date);
    // setId(data.userId);
    // getNameUser(id);
    return (
      <div key={data.id} className="comentBox">
        <div className="boxMain">
          <div className="boxProfile">
            <h1>{`${data.userId} (nama)`}</h1>
            {/* <p>{new (data.createdAt).toDateString()}</p> */}
            <p>{date}</p>
          </div>
          <div className="boxText">
            <p>{data.comments}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div id="comentContainer">
      {listComment}

      <div id="formComent">
        <div className="formInput">
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                value={comment}
                as="textarea"
                rows={3}
                placeholder="Silahkan Masukkan Komentar Anda ..."
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
            </Form.Group>
            <Button type="submit" className="my-1" onClick={onSubmit}>
              Kirim
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Comments;
