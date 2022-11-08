import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import GuestList from './pages/GuestList';
import Navigation from './components/navigation/Navigation';


function App() {
  return (
    <div style={{width: '100vw', height:'100%', minHeight: '100vh',  backgroundImage:'./assets/bg.jpg', backgroundPosition: 'center', backgroundSize: 'cover'}} >
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/guest-list' element={<GuestList/>} />
      </Routes>
    </div>
  );
}

export default App;
