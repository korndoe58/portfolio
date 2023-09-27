import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


import "./intro.scss";
function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backSpeed: 60,
      backDelay: 500,
      strings: ["Web Developer", "Ceramicist","Economics tutor"]
    });
  }, []);

  return (
    <div id="intro" className="intro">
      <div className="left">
        <div className="imgContainer">
          
         
          
          
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h3>Hi there, I'm</h3>
          <h1>Supakorn Rattanapet </h1>
          
          <h3>
            I'm  <span ref={textRef}></span>
          </h3>
          <a href="#portfolio">
            <KeyboardArrowDownIcon className="downArrow" />
          </a>
        </div>
          
        
        
      </div>
    </div>
  );
}

export default Intro;
