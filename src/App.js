import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import About from './components/About';
import ContactUs from './components/Contact';
import Login from './components/Login';

function App() {
  return (
    <>
      <Navbar title='TEXT HANDLE' />
      <Routes basename='/TEXT_HANDLE'>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
