

import {} from 'react';
import './App.css';
import Home from './home.jsx';
import Menu from './menu.jsx';
import Orderonline from './orderonline.jsx';
import Login from './login.jsx';
import BookingPage from  './bookingPage.jsx';
import {Routes, Route, Link} from 'react-router-dom';





const App=() => {

  return(

    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/menu" className="nav-item">Menu</Link>
        <Link to="/orderonline" className="nav-item">Orderonline</Link>
        <Link to="/login" className="nav-item">Login</Link>
        <Link to="/booking" className="nav-item">Booking</Link> 

      </nav>
      <Routes>
    <Route path="/" element={<Home />}/>
    <Route path= "/menu" element={<Menu />}/>
    <Route path= "/orderonline" element={<Orderonline />}/>
    <Route path= "/login" element={<Login />}/>
    <Route path="/booking" element={<BookingPage />} /> 
    </Routes>
    </div>



  );
}
export default App;
