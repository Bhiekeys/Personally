import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import DailyDigest from './pages/DailyDigest';
import DesignTools from './pages/DesignTools';
import Tutorial from './pages/Tutorial';
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily-digest" element={<DailyDigest />} />
          <Route path="/design-tools" element={<DesignTools />} />
          <Route path="/tutorials" element={<Tutorial />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
