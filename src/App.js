import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from "./Pages/Home";
import './Sass/Index.scss';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";



function App() {
  return (
    <div className="App">
      <Header/>
<Home/>
<Footer />
    </div>
  );
}

export default App;
