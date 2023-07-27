import React from "react";
import Home from "./pages/Home";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages//Projects";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
