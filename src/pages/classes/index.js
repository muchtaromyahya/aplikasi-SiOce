import React from 'react';
import { ClassList, NavbarClass } from '../../components';
import { classService } from '../../services';
import './styleclasses.css';

const Classes = () => {
  // const [userDataLoading, setUserDataLoading] = useState(false);
  // const [class, setClass] = useState([]);

  // useEffect(() => {
  //   setUserDataLoading(true);
  classService.classes();
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
      {/* <ClassList2 />
      <ClassList2 /> */}

      <div className="cards">
        {/* {class.map((class) => {
          return(<ClassList title={class.title} desciption={class.desciption}/>)
        })} */}

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
