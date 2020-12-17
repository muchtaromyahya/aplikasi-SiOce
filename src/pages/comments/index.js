import React from 'react';
import './style.css';

const list = [
  {
      id: '1',
      name: 'Yoga',
      time: '12-10-2020 17:20',
      text: 'Maaf izin bertanya untuk soal no 3 itu seperti apa ya?'
  },
  {
      id: '2',
      name: 'Prianjaya',
      time: '21-01-2020 20:17',
      text: 'Saya juga ingin bertanya mengenai pelaporan apakah pengumpulannya hanya 1 orang dari tiap kelompok?'
  }
];

const Comments = () => {
  const dataComent = list.map((data) => {
    return (
      <div key={data.id} className="comentBox">
        <div className="boxMain">
          <div className="boxProfile">
            <h1>{data.name}</h1>
            <p>{data.time}</p>
          </div>
          <div className="boxText">
            <p>{data.text}</p>
          </div>
        </div>
      </div>
    );
});

return (
  <div id="comentContainer">
    { dataComent }

    <div id="formComent">
      <div className="formInput">
        <textarea value="Silahkan Masukkan Komentar Anda ..." />
        <input type="submit" value="Kirim" />
      </div>
    </div>

  </div>
);
};

export default Comments;
