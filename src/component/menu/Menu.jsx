import "./Menu.scss"
import CallIcon from '@mui/icons-material/Call';
export default function Menu({menuOpen,setMenuopen}) {
  return (
    <div className={'menu '+(menuOpen && "active") }>
        <ul>
            <li>
                <a href="#intro" onClick={()=>setMenuopen(!menuOpen)}>Home</a>
            </li>
            <li>
                <a href="#portfolio" onClick={()=>setMenuopen(!menuOpen)}>About</a>
            </li>
            <li>
                <a href="#work" onClick={()=>setMenuopen(!menuOpen)}>Work</a>
            </li>
            <li>
                <a href="#contact" onClick={()=>setMenuopen(!menuOpen)}>Contact</a>
            </li>
           
            <div className="tel"><CallIcon/><span> 099-328-3540</span></div>
           

        </ul>
    </div>
  )
}
