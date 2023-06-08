import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/signUp';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          
          <Route path='/' element={<Home />}  ></Route> 
          <Route path='/signUp' element={<Signup />}  ></Route> 
          <Route path='/login' element={<Login />}  ></Route> 
          <Route path='/register' element={<Register />}  ></Route> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
