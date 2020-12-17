import React from 'react';
import './style.css';

const Posts = () => {
  const dataPosting = list.map((data) => {
    return (
      <div className="boxPosting" key={data.id}>
        <div className="boxMain">
          <div className="boxProfile">
            <h1>{data.name}</h1>
            <p>{data.time}</p>
          </div>
          <div className="action">
            <div className="btnAction">
              <img src={edit} alt="edit" />
            </div>
            <div className="btnAction">
              <img src={hapus} alt="delete" />
            </div>
          </div>
        </div>
        <div className="boxText">
          <p>{data.text}</p>
        </div>
      </div>
    );
});

return (
  <div id="containerPosting">
    {dataPosting}
    <Coments />
  </div>
);
};

export default Posts;
