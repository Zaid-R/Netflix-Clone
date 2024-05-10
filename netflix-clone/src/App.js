import './App.css';
import Footer from './components/Footer/Footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home.js';
import ModalMovie from './components/ModalMovie/ModalMovie.js';
import Navbar from './components/Navbar/Navbar.js';

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<ModalMovie />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
