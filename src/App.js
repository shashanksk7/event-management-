import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <header>
          <Header />
        </header>
        <main>
         
        </main>
      </Router>
    </>
  );
}

export default App;
