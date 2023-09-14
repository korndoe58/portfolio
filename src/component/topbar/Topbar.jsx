import "./topbar.scss";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
export default function topbar({menuOpen,setMenuopen}) {
  return (
    <div className={'topbar '+(menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Supakorn.R</a>
          <div className="itemcontainer">
            <AccountCircleIcon className="icon"/>
            <span>099-328-3540</span>

          </div>
          <div className="itemcontainer">
            <EmailIcon className="icon"/>
            <span>korndoe58@gmail.com</span>

          </div>
        </div>
        
        <div className="right">
          <div className="hamberger" onClick={()=>setMenuopen(!menuOpen)}>
            <span className="line1"> </span>
            <span className="line2"> </span>
            <span className="line3"> </span>

          </div>


        </div>


      </div>
    </div>
  )
}
