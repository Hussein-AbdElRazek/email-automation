import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import './App.css';
import Login from './pages/Login/Login';
import AuthContext from './store/auth-context';
import Home from './pages/Home/Home';

function App()
{
  const authCtx = useContext(AuthContext);
  return (
    <Routes>
      {!authCtx.isLoggedIn ? (
        <>
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
        </>
      ) : (
        <Route path='/*' element={<Home />} />
      )}
    </Routes>
  );
}

export default App;
