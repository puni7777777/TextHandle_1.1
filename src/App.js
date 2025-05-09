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
import LoginResponsive from './components/LoginResponsive';
import SignupResponsive from './components/SignupResponsive';
import LoginWrapper from './components/LoginWrapper';

function App() {
  return (
    <>
      <Navbar title='TEXT HANDLE' />
      <Routes basename='/TEXT_HANDLE'>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/loginwrapper" element={<LoginWrapper />} />
        <Route path="/loginresponsive" element={<LoginResponsive />} />
        <Route path="/signupresponsive" element={<SignupResponsive />} />
      </Routes>
    </>
  );
}

export default App;
