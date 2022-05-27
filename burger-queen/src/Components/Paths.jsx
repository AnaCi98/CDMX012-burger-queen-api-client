/* eslint-disable no-console */
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './Login/Login';
import Waiter from './Waiter/Waiter';
import Order from './Order/Order';
import { onAuthStateChanged } from '../Firebase/firebaseApp';
import { auth } from '../Firebase/firebaseAuth';
import { getRole } from '../Firebase/firebaseFirestore';
import Admin from './Admin/Admin';

function Paths() {
  const [activeRole, setActiveRole] = useState(null);
  const [activeUser, setActiveUser] = useState(null);
  const [activeName, setActiveName] = useState(null);
  const [newClient, setNewClient] = useState();

  const getClientName = (clientName) => {
    setNewClient(clientName);
  };

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
      getRole(activeUser).then((doc) => {
        const employee = doc;
        setActiveRole(employee.rol);
        setActiveName(employee.name);
      });
    }; settingRole();
  }, [activeUser]);

  switch (activeRole) {
    case 'meserx':
      return (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/waiter" element={<Waiter activeName={activeName} getClientName={getClientName} />} />
          <Route path="/order" element={<Order newClient={newClient} />} />
        </Routes>
      );
    case 'admin':
      // eslint-disable-next-line consistent-return
      return (
        <Routes>
          <Route path="/admin" element={<Admin />} />
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
