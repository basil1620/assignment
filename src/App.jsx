import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Blog from "./components/Blog";
import Addblog from "./components/Addblog";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/add" element={<Addblog />} />
      </Routes>
    </Router>
  );
}

export default App;