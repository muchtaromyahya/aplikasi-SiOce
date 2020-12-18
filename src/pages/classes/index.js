import React, { useEffect, useState } from 'react';
import { ClassList, NavbarClass, Tugas } from '../../components';
import { classService } from '../../services';

import './styleclasses.css';

const Classes = () => {
  // const [userDataLoading, setUserDataLoading] = useState(false);
  const [classname, setClassname] = useState([]);

  useEffect(() => {
    //   setUserDataLoading(true);
    classService
      .classes()
      .then((res) => {
        setClassname(res);
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
    <div>
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
      <div className="mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col md-8 text-center">
              <h1>Postingan</h1>
            </div>
            <div className="col md-4">
              <Tugas />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
