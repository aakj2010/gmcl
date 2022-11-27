import React from 'react'
import Compose from './Compose';
import InboxIcon from '@material-ui/icons/Inbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MenuIcon from '@material-ui/icons/Menu';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
// import GroupsOutlinedIcon from '@material-ui/icons/GroupsOutlined';
import gmail from '../../images/gmail.png'

import './SideBar.css';
// import '../topbar/TopBar.css';
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className='sidebar d-flex'>
      <div className='sidemenu'>

        <div>
          <button className='mainmenu'><MenuIcon /></button>
          <span className='mainmenuhide'>Hide main menu</span>
        </div>
        <div className='material_icons'>
          <button style={{color:'#000'}}><span className="material-symbols-outlined side-icons">email</span>Mail</button>
          <button style={{color:'#000'}}><span className="material-symbols-outlined side-icons">chat_bubble</span>Chat</button>
          <button style={{color:'#000'}}><span className="material-symbols-outlined side-icons">groups</span>Spaces</button>
          <button style={{color:'#000'}}><span className="material-symbols-outlined side-icons">videocam</span>Meet</button>
        </div>

      </div>
      <div className='mainmenu-collapse-container'>
        <div className='img'>
          <img src={gmail} style={{ height: "20px" }} alt='gmail' />
          <span className=''>Gmail</span>
        </div>
        <Compose />
        <ul style={{ paddingLeft: '1rem', backgroundColor: '#f6f8fc' }}>
          <li>
            {/* <div className='list-items'> */}
            <Link className='list-items active' to='inbox'>
              <InboxIcon style={{ color: "#5f6368" }} fontSize='small' />
              <span style={{ fontWeight: "500", color: '#000' }}>Inbox</span>
            </Link>
            {/* </div> */}
          </li>
          <li>
            {/* <div className='list-items'> */}
            <Link className='list-items' to='starred'>
              <StarBorderIcon fontSize='small' style={{ color: "#5f6368" }}/>
              <span>Starred</span>
            </Link>
            {/* </div> */}
          </li>
          <li>
            <div className='list-items'>
              {/* <Link to='/inbox'> */}
              <WatchLaterOutlinedIcon fontSize='small' style={{ color: "#5f6368" }}/>
              <span>Snoozed</span>
              {/* </Link> */}
            </div>
          </li>
          <li>
            <div className='list-items'>
              {/* <Link to='/inbox'> */}
              <LabelImportantIcon fontSize='small' style={{ color: "#5f6368" }}/>
              <span>Important</span>
              {/* </Link> */}
            </div>
          </li>
          <li>
            {/* <div className='list-items'> */}
            <Link className='list-items' to='sent'>
              <SendOutlinedIcon fontSize='small' style={{ color: "#5f6368" }}/>
              <span>Sent</span>
            </Link>
            {/* </div> */}
          </li>
          <li>
            {/* <div className='list-items'> */}
            <Link className='list-items' to='/inbox'>
              <DraftsOutlinedIcon fontSize='small' style={{ color: "#5f6368" }}/>
              <span>Drafts</span>
            </Link>
            {/* </div> */}
          </li>
          <li>
            {/* <div className='list-items'> */}
            <Link className='list-items' to='/inbox'>
              <LabelOutlinedIcon fontSize='small' style={{ color: "#5f6368" }}/>
              <span >Categories</span>
            </Link>
            {/* </div> */}
          </li>
          <li>
            <div className='list-itemsmore'>
              {/* <Link to='/inbox'> */}
              <KeyboardArrowDownIcon fontSize='small' style={{ color: "#5f6368" }}/>
              <span>More</span>
              {/* </Link> */}
            </div>
          </li>
        </ul>
      </div>


    </div>
  )
}

export default SideBar