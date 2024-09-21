import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer'
import Header from "./components/Header";

function App() {
    return (

        <Router >
        <div >
        <Routes >
        <Route path = "/footer" element = { < Footer />}/>
            <Route path = "/header" element = { < Header /> }/>
        </Routes>
        </div>
        </Router>


    );
}

export  default  App;