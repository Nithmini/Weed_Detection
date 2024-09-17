import './App.css';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Footer from './components/Footer'
function App() {
  return (

    <Router>
      <div>
        <Routes>
          <Route path="/footer" element={<Footer/>}/>
        </Routes>
      </div>
    </Router>
   
    
  );
}

export default App;