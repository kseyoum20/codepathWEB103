import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CreatorsCard from "./components/contentCreators/creatorsCard";
import CreatorsGrid from "./components/contentCreatorsGrid/creatorsGrid";
import CreatorDetailCard from "./components/contentCreatorDetails/creatorDetailCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>This is app. render grid component by routing</p>
      <Router>
        <Routes>
          <Route path="/" element={<CreatorsGrid />} />
          <Route path="/Card" element={<CreatorsCard />} />
          <Route path="/Details/:id" element={<CreatorDetailCard />}></Route>
        </Routes>
      </Router>
    </>
  );
}
