


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './NavBar';
// import Menu from './components/Menu';
// import About from './components/About';
// import Contact from './components/contact';
// import Home from './components/Home';
// import Orderonline from './components/Orderonline';

// const App = () => {
//     return (
//         <div className="App">
//         <nav className="nav">
//           <Link to="/" className="nav-item">Home</Link>
//           <Link to="/Menu" className="nav-item">Menu</Link>
//           <Link to="/Orderonline" className="nav-item">Orderonline</Link>
//           <Link to="/Login" className="nav-item">Login</Link>
//           <Link to="/booking" className="nav-item">Booking</Link> 
  
//         </nav>

//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/orderonline" element={<Orderonline />} />
//                 <Route path="/Menu" element={<Menu />}/>
//             </Routes>
//         </Router>
//         </div>
//     );
// };

// export default App;



import './App.css';
import Home from '../components/Home.jsx';
import Menu from '../components/Menu.jsx';
import Orderonline from '../components/Orderonline.jsx';
import Login from '../components/Login.jsx';
import BookingPage from  '../components/BookingPage.jsx';
import {Routes, Route, Link} from 'react-router-dom';





const App=() => {

  return(

    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/Menu" className="nav-item">Menu</Link>
        <Link to="/Orderonline" className="nav-item">Orderonline</Link>
        <Link to="/Login" className="nav-item">Login</Link>
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
