import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Pages/Home";
import "./Sass/Index.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {

  const [sidebarBottom , setSidebarBottom] = useState(100)
 
  function openSidebar () {
    setSidebarBottom(0)
  }

  function closeSidebar () {
    setSidebarBottom(100)
  }
 
  return (
    <div className="App">
      <Header 
      OpenSidebar = {openSidebar}
       />
      <Sidebar 
      SidebarBottom ={sidebarBottom}
      ColseSidebar = {closeSidebar}
       />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
