/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Waiter from './Waiter/Waiter';
import Order from './Order/Order';
import { getRole } from '../Firebase/firebaseFirestore';
import Admin from './Admin/Admin';
import Stocktaking from './Admin/Stocktaking';
import Workers from './Admin/Workers';
import Kitchen from './Kitchen/Kitchen';
import NotFound from './404';

function Paths({ activeUser, getOutSession }) {
  const [activeRole, setActiveRole] = useState(null);
  const [activeName, setActiveName] = useState(null);
  const [newClient, setNewClient] = useState();

  const getClientName = (clientName) => {
    setNewClient(clientName);
  };

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
          <Route path="/" element={<Waiter activeName={activeName} getClientName={getClientName} getOutSession={getOutSession} />} />
          <Route path="/order" element={<Order activeName={activeName} newClient={newClient} />} />
        </Routes>
      );
    case 'cocina':
      return (
        <Routes>
          <Route path="/" element={<Kitchen activeName={activeName} getOutSession={getOutSession} />} />
        </Routes>
      );
    case 'admin':
      return (
        <Routes>
          <Route path="/" element={<Admin getOutSession={getOutSession} />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/products" element={<Stocktaking />} />
        </Routes>
      );
    default:
      return (
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      );
  }
}

export default Paths;
