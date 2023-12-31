import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Tutorials from "./pages/Tutorials";
import Footer from "./pages/Footer";
// import Blogs from "./pages/blogs";
// import SignUp from "./pages/signup";
// import Contact from "./pages/contact";
import "./assets/style/App.css";
 
function App() {
    return (
        <div >
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/tutorials" element={<Tutorials />} />
                </Routes>
                <Footer />
            </Router>
        </div>
        
    );
}
 
export default App;