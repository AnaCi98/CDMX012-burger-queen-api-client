/* eslint-disable no-console */
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './Login/Login';
import Waiter from './Waiter/Waiter';
import Order from './Waiter/Order';
import { onAuthStateChanged } from '../Firebase/firebaseApp';
import { auth } from '../Firebase/firebaseAuth';
import { getDocuments } from '../Firebase/firebaseFirestore';

function Paths() {
  const [activeRole, setActiveRole] = useState(null);
  const [activeUser, setActiveUser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      onAuthStateChanged(auth, (user) => {
        setActiveUser(user.uid);
      });
    };
    getUser();
  }, []);

  useEffect(() => {
    const settingRole = () => {
      getDocuments().then((docs) => {
        docs.forEach((doc) => {
          if (doc.id === activeUser) {
            const newRole = (doc.data().rol).toString();
            console.log(newRole);
            setActiveRole(newRole);
          }
        });
      });
    }; settingRole();
  }, [activeUser]);

  console.log(activeRole);

  switch (activeRole) {
    case 'meserx':
      return (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/waiter" element={<Waiter />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      );
    case 'admin':
      // eslint-disable-next-line consistent-return
      return (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      );
      // <h1>ADMIN en construcción</h1>;
    default:
      // eslint-disable-next-line consistent-return
      return (
        <Routes>
          <Route path="/" element={<Login />} />
          ;
        </Routes>
      );
  }
}

export default Paths;
