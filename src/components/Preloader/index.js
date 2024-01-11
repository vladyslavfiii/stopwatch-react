import React from "react";
import { useState } from "react";
import '../../index.css';

const Preloader = (props) =>{
  const [display, setDisplay] = useState(props.display)

  if(props.display === "flex"){
    setTimeout(() => {
      setDisplay("none");
    }, "3500");
  }

  return (
    <div className="preloader" style={{display:display}} >
      <div   className="preloaderInner"></div>
    </div>
  )
}

export default Preloader;