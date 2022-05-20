import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Paths from './Components/Paths';

function App() {
  return (
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  );
}

export default App;
