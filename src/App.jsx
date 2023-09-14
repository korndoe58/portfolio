import Topbar from "./component/topbar/Topbar";
import Intro from "./component/intro/Intro"
import Portfolio from "./component/portfolio/Portfolio"
import Work from "./component/work/Work"
import Testimonial from "./component/testimonial/Testimonial"
import Contact from "./component/contact/Contact"
import Menu from "./component/menu/Menu";
import "./app.scss"
import { useState } from "react";




function App() {
  const [menuOpen,setMenuopen] = useState(false)
  return (
    <>  
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuopen={setMenuopen}/>
        <Menu menuOpen={menuOpen} setMenuopen={setMenuopen}/>
        <div className="sections">
          <Intro/>
          <Portfolio/>
          <Work/>
          <Testimonial/>
          <Contact/>

        </div>

      </div>
    
    </>
  );
}

export default App;
