import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from './components/AboutUs';
import Feedback from './components/Feedback';
import Services from './components/Services';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
function App() {
  return (

    <Router>
      <div>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />

        </Routes>
        <Footer />
      </div>
    </Router>


  );
}

export default App;
