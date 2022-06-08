import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from './Firebase/firebaseApp';
import { auth, signOut } from './Firebase/firebaseAuth';
import Login from './Components/Login/Login';
import './App.css';
import Paths from './Components/Paths';
import NotFound from './Components/404';

function App() {
  const [activeUser, setActiveUser] = useState(null);

  const getOutSession = () => signOut(auth);

  useEffect(() => {
    const getUser = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) { setActiveUser(user); } else { setActiveUser(null); }
      });
    };
    getUser();
  }, []);
  return (
    <BrowserRouter>
      { activeUser ? <Paths activeUser={activeUser.uid} getOutSession={getOutSession} />
        : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
    </BrowserRouter>
  );
}

export default App;
