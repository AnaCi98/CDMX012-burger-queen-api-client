/* eslint-disable no-console */
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './Login/Login';
import Waiter from './Waiter/Waiter';
import Order from './Waiter/Order';
import { onAuthStateChanged } from '../Firebase/firebaseApp';
import { auth } from '../Firebase/firebaseAuth';
// eslint-disable-next-line import/named
import { getRole } from '../Firebase/firebaseFirestore';

function Paths() {
  // eslint-disable-next-line no-unused-vars
  const [activeRole, setActiveRole] = useState(null);
  const [activeUser, setActiveUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    const getUser = () => {
      onAuthStateChanged(auth, (user) => {
        setActiveUser(user.uid);
      });
    };
    getUser();
  }, []);

  useEffect(() => {
    if (activeUser !== null) {
      const settingRole = () => {
        const newRole = getRole(activeUser);
        console.log(newRole, 'active role en useEffect');
        setActiveRole(newRole);
      };
      settingRole();
    }
  }, [activeUser]);
  /* useEffect(() => {
    setTimeout(() => {
      console.log(activeRole);
    }, 5000);
  }, [activeRole]); */

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/waiter" element={<Waiter />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default Paths;
