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
  console.log(typeof empleadxs, 'afuera de todo');
  useEffect(() => {
    const getUser = () => {
      onAuthStateChanged(auth, (user) => {
        setActiveUser(user.uid);
      });
    };
    getUser();
  }, []);

  useEffect(() => {
    const getActiveRole = () => {
      if (activeUser !== null) {
        console.log(activeUser, 'adentro de get role');
        setActiveRole(getRole(activeUser));
        /* .then((docs) => {
          docs.forEach((doc) => {
            role = doc.rol;
          });
        }); */
        console.log(activeRole);
      }
    };
    getActiveRole();

    console.log('se ejecuta useEffect active user');
  }, [activeUser]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/waiter" element={<Waiter />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default Paths;
