import './App.css';
import Footer from './components/Footer/Footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home.js';
import ModalMovie from './components/ModalMovie/ModalMovie.js';
import Navbar from './components/Navbar/Navbar.js';
import FavList from './components/FavList/FavList.js';

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favlist" element={<FavList/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
