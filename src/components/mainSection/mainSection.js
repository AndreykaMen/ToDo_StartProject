import React from "react";
import TaskList from "../taskList/taskList";
import Footer from "../footer";

import './mainSection.css'

const MainSection =()=>{

  return (
      <section className="main">
        <TaskList/>
        <Footer/>
      </section>
  )
}
export default MainSection;