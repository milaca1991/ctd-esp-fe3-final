
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Home from './Routes/Home';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Detail/:id" element={<Detail />}/>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Favs" element={<Favs />} />
        
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
