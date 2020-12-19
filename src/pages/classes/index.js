import React, { useEffect, useState } from 'react';
import { ClassList, NavbarClass } from '../../components';
import { classService } from '../../services';
import './styleclasses.css';

const Classes = () => {
  // const [userDataLoading, setUserDataLoading] = useState(false);
  const [classname, setClassname] = useState([]);
  // const [classId, setClassId] = useState([]);

  useEffect(() => {
    // setUserDataLoading(true);
    classService
      .classes()
      .then((res) => {
        setClassname(res);
        // setClassname(res);

        console.log(res);
      })
      .catch((err) => {
        return console.log(err);
      })
      .finally(() => {
        // setUserDataLoading(false);
      });
  }, []);
  return (
    <div className="classbody">
      <NavbarClass />

      <div className="cards">
        {classname.map((classnames) => {
          return (
            <ClassList
              title={classnames.classname}
              desciption={classnames.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Classes;
