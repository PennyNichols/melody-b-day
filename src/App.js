import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import GuestList from './pages/GuestList';


function App() {
  return (
    <div style={{backgroundColor: 'blue'}}>
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
