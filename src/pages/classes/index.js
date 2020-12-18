import React from 'react';
import { ClassList, NavbarClass } from '../../components';
import './style.css';

const Classes = () => {
  // const [userDataLoading, setUserDataLoading] = useState(false);
  // const [product, setProduct] = useState([]);

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
  return (
    <div className="classbody">
      <NavbarClass />
      <div className="cards">
        <ClassList />
        <ClassList />
        <ClassList />
        <ClassList />
        <ClassList />
      </div>
    </div>
  );
};

export default Classes;
