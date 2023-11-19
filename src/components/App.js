import React from "react";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/:id" element={<Detail />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;