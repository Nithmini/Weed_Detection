import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import AboutUs from './components/AboutUs';
import AddFeedback from './components/AddFeedback';
import WeedPrediction from './components/Combined';
import ContactUs from './components/ContactUs';
import Feedback from './components/Feedback';
import FeedbackList from './components/FeedbackList';
import Footer from './components/Footer';
import GetStart from './components/GetStart';
import Header from './components/Header';
import HerbicidePredictor from './components/HerbicidePredictor';
import Home from './components/Home';
import ImageUpload from './components/ImageUpload';
import Login from './components/Login';
import Register from './components/Register';
import Services from './components/Services';
function App() {
  return (

    <Router>
      <div>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/feedbackList" element={<FeedbackList />} />
          <Route path="/addfeedback" element={<AddFeedback/>} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/getStart" element={<GetStart />} />
          <Route path="/imageUpload" element={<ImageUpload />}/>
          <Route path="/HerbicidePredictor" element={<HerbicidePredictor />} />
          <Route path="/weed" element={<WeedPrediction />} />
        </Routes>
        <Footer />
      </div>
    </Router>


  );
}

export default App;
