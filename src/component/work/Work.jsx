import "./work.scss"
import Card from "./card"

export default function work() {
  return (
    <div className="work" id="work">
      <div className="container">
        <div className="top">
          <h1>My Projects</h1>
          <h2>Some things I've built with love, expertise and a pinch of magical ingredients.</h2>
        </div>

        <div className="bottom">
          <a href="#contact"><Card CardName={"Tesla"} Detail={"korndoe"}/> </a>
          <a href="#contact"><Card CardName={"Tesla"} Detail={"korndoe"}/> </a>
          <a href="#contact"><Card CardName={"Tesla"} Detail={"korndoe"}/> </a>
          <a href="#contact"><Card CardName={"Tesla"} Detail={"korndoe"}/> </a>

   

        </div>
      </div>

    </div>
  )
}
