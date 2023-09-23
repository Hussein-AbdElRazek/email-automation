import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import './App.css';
import Login from './pages/Login/Login';

function App()
{
  return (
    <Routes>
      <Route path='signup' element={<SignUp />} />;
      <Route path='login' element={<Login />} />;
    </Routes>
  );
}

export default App;
