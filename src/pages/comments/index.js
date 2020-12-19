import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './style_comments.css';
// import { getCookie } from '../../utils/cookie.js';
import { commentsService } from '../../services';

// const list = [
//   {
//       id: '1',
//       name: 'Yoga',
//       time: '12-10-2020 17:20',
//       text: 'Maaf izin bertanya untuk soal no 3 itu seperti apa ya?'
//   },
//   {
//       id: '2',
//       name: 'Prianjaya',
//       time: '21-01-2020 20:17',
//       text: 'Saya juga ingin bertanya mengenai pelaporan apakah pengumpulannya hanya 1 orang dari tiap kelompok?'
//   }
// ];

const Comments = () => {
  const [getComments, setGetComments] = useState([]);
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    commentsService.CommentsService.then((res) => {
      setGetComments(res.data);
      console.log(isLoading);
    })
      .catch((err) => {
        return console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDevault();
  };

  const listComment = getComments.map((data) => {
    return <h1>{data.description}</h1>;
  });

  //   const dataComent = list.map((data) => {
  //     return (
  //       <div key={data.id} className="comentBox">
  //         <div className="boxMain">
  //           <div className="boxProfile">
  //             <h1>{data.name}</h1>
  //             <p>{data.time}</p>
  //           </div>
  //           <div className="boxText">
  //             <p>{data.text}</p>
  //           </div>
  //         </div>
  //       </div>
  //     );
  // });

  return (
    <div id="comentContainer">
      {/* { dataComent } */}
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
