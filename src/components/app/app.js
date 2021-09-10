import React from "react";
import './app.css';

import Header from "../header";
import MainSection from "../mainSection";

const App =()=>{

  return (
      <section className="todoapp">
        <Header/>
        <MainSection/>
      </section>
  )
}
export default App;