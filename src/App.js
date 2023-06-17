
import './App.css';
 import React from 'react'
 import CircleButton from './components/CircleButton'
import './styles.css'
 import UserGrids from './components/UserGrids'
 import NavBar from "./components/NavBars";
 import NotFound404 from './components/NotFound404';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<CircleButton />} />
            <Route path="/userGrids" element={<UserGrids />} />
            <Route path="/notFound404" element={<NotFound404 />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

  



