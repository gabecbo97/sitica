import React from 'react';
import './Styles/App.scss'
import Nav from "./components/navbar/Navbar"
import Banner  from "./components/Banner/Banner"



function App() {
  return (
   

    <div className="home">
       <Nav/>

      <div className="container">
        <Banner/>
     

      </div>
    </div>
  );
}

export default App;
