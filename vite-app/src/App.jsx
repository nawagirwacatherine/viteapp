

import './react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Orderonline from './components/Orderonline';

const App = () => {
    return (
        <div>
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/orderonline" element={<Orderonline />} />
                <Route path="/Menu" element={<Menu />}/>
            </Routes>
        </Router>
        </div>
    );
};

export default App;
