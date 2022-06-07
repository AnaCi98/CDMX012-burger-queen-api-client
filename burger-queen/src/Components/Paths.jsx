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
import Kitchen from './Kitchen/Kitchen';
import Stocktaking from './Admin/Stocktaking';
import Workers from './Admin/Workers';

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
          <Route path="/order" element={<Order activeName={activeName} newClient={newClient} />} />
        </Routes>
      );
    case 'cocina':
      return (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/kitchen" element={<Kitchen activeName={activeName} />} />
        </Routes>
      );
    case 'admin':
      // eslint-disable-next-line consistent-return
      return (
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/products" element={<Stocktaking />} />
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
