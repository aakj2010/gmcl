import React from 'react'
import TuneIcon from '@material-ui/icons/Tune';
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import gmail from '../../images/gmail.png'
import MenuIcon from '@material-ui/icons/Menu';



import './TopBar.css';

function TopBar() {
    return (
        <div className='topbarcontainer'>
            {/* <div className='menuwithimg'>
                <div className='menu'>
                    <button className='mainmenu'><MenuIcon /></button>
                    <span className='mainmenuhide'>Main menu</span>
                </div>
                <div className='img'>
                    <img src={gmail} style={{ height: "20px" }} alt='gmail' />
                    <span> Gmail</span>
                </div>
            </div> */}

            <div className='searchbar'>
                <div className='searchbarwrapper'>
                    <span className='icon'>
                        <button className='searchicon'><SearchIcon /></button>
                        <span className='searchiconhide'>Search</span>
                    </span>
                    <input type='text' placeholder='Search mail' />
                    <span className='icon'>
                        <button className='search searchicon'><TuneIcon /></button>
                        <span className='searchhide'>Show search options</span>
                    </span>
                </div>
            </div>

            <div className='iconswrapper'>
                <span className='icons'>
                    <button className='help'><HelpOutlineIcon /></button>
                    <span className='helphide'>Support</span>
                </span>
                <span className='icons'>
                    <button className='settings'>
                        <SettingsIcon />
                        {/* <span class="material-symbols-outlined icons">settings</span> */}
                    </button>
                    <span className='settingshide'>Settings</span>
                </span>
                <span className='icons'>
                    <button className='apps'><AppsIcon /></button>
                    <span className='appshide'>Google Apps</span>
                </span>
                <span className='icons'>
                    <button className='account'><AccountCircleIcon /></button>
                    <span className='accounthide'>Google Account <br />
                        <span style={{ color: "#bfbfbf" }}>User name</span> <br />
                        <span style={{ color: "#bfbfbf" }}>email</span></span>
                </span>
            </div>
        </div>
    )
}

export default TopBar