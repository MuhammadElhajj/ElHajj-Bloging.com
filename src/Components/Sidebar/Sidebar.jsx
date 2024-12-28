import SocialMedia from "../SocialMedia"
import { CgClose } from "react-icons/cg"
import HeaderLinks from "../headerLinks"


function Sidebar ({SidebarBottom , ColseSidebar}) {
    return <div className="Sidebar" style={{bottom : `${SidebarBottom}vh`}}>
        <CgClose className="Sidebar__Close__Icon" onClick={ColseSidebar}/>
        <h2 className="Sidebar__Social__Media__h2">Main Web Links</h2>
        <div className="Sidebar__Main__Links">
           
            {
HeaderLinks && HeaderLinks.length > 0 ? 
HeaderLinks.map(item => <a className ="Sidebar__Main__Link "href="#">{item.name}</a>)
:null
            }
        </div>
        <div className="Sidebar__Links__Container">
        <h2 className="Sidebar__Social__Media__h2">Social Media Links</h2>
        {
            SocialMedia && SocialMedia.length > 0 ?
            SocialMedia.map(item=> <a className="Sidebar__Link" href="#"><img className="Sidebar__Link__Img" src={item.src} alt="Socail" /><span>{item.name}</span></a>)
            : null
        }
    </div>
    </div>
}


export default Sidebar