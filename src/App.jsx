import { HashRouter, Route, Routes } from "react-router";
import './App.css'
import {  Home, NotFound, About, Docs, Download, } from "./pages";

function App() {

  return (
    <>
      <HashRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="docs" element={<Docs />}></Route>
        <Route path="download" element={<Download />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </HashRouter>
    </>
  )
}

export default App
