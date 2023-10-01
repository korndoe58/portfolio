import "./work.scss"
import GitHubIcon from '@mui/icons-material/GitHub';




export default function work() {
  return (
    <div className="work" id="work">
      <div className="container">
        <div className="top">
          <h1>My Projects</h1>
          <h2>Some things I've built with love, expertise and a pinch of magical ingredients.</h2>
        </div>

        <div className="bottom">

          <a href="https://crypto-trading-app-orcin.vercel.app/"  target="blank" id="card1">
            <div className="card1">
              <div className="overlay">
                <h1 className='cardname'>TradingApp</h1>
                <img className="logo" src="https://www.shubhporwal.me/_next/image?url=%2Fskills%2Fnextjs.svg&w=64&q=75" alt="HTML"/>
                <img className="logo" src="https://www.shubhporwal.me/_next/image?url=%2Fskills%2Ftailwindcss.svg&w=64&q=75" alt="HTML"/>
                <img className="logo" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" alt="HTML"/>

               </div>
            </div>   
          </a>
          <a href="https://github.com/korndoe58/ceramic-store" target="blank" id="card2">
            <div className="card2">
              <div className="overlay">
                <h1 className='cardname'>Ceramic store</h1>
                <img className="logo" src="https://www.shubhporwal.me/_next/image?url=%2Fskills%2Fnextjs.svg&w=64&q=75" alt="HTML"/>
                <img className="logo" src="https://www.shubhporwal.me/_next/image?url=%2Fskills%2Ftailwindcss.svg&w=64&q=75" alt="HTML"/>
               </div>
            </div>   
          </a>



          <a href="https://github.com/korndoe58?tab=repositories" target="blank">All project <GitHubIcon/></a>
          
        </div>
      </div>

    </div>
  )
}
