import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";


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
