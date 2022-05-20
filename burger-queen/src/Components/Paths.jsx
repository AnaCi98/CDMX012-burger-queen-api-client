/* eslint-disable no-console */
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login/Login';
import Waiter from './Waiter/Waiter';
import Order from './Waiter/Order';
import { onAuthStateChanged } from '../Firebase/firebaseApp';
import { auth } from '../Firebase/firebaseAuth';
import empleadxs from '../Firebase/firebaseFirestore';

function Paths() {
  const [activeUser, setActiveUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setActiveUser(user);
      console.log(empleadxs, activeUser);
    }
  });

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/waiter" element={<Waiter />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default Paths;
