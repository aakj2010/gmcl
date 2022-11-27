import React from 'react'
import './EmailView.css'
import InboxIcon from '@material-ui/icons/Inbox';
// import SellIcon from '@material-ui/icons/Sell';
// import SellRoundedIcon from '@material-ui/icons/SellRounded';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import { CheckBox } from '@mui/icons-material';
// import { primary } from '../data/Primary';
// import { Checkbox } from '@material-ui/core'

const primary = [
  {
    id: 1,
    company: "GeeksForGeeks",
    Title: "Ace you Dsa Interview",
    dummy:
      "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
  },
  {
    id: 3,
    company: "Amazon",
    Title: "Do not buy Flipkart Products",
    dummy:
      "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
  },
  {
    id: 4,
    company: "Flipkart",
    Title: "Don't buy products from Amazon",
    dummy:
      "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
  },
  {
    id: 6,
    company: "Apple",
    Title: "Do not use Google Assistant",
    dummy:
      "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
  },
  {
    id: 7,
    company: "Intuit",
    Title: "My product is used in Foreign Country",
    dummy:
      "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
  },
  {
    id: 8,
    company: "Walmart",
    Title: "Most Active Employee - Thrifty Kapila",
    dummy:
      "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
  },
  {
    id: 9,
    company: "Hacker Earth",
    Title: "Nikhil stop sending the mail",
    dummy:
      "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
  },
  {
    id: 10,
    company: "CodeChef",
    Title: "I comes under Unacademy",
    dummy:
      "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
  }
]

function Inbox() {
  return (
    <div className='inbox-container emailview'>
      <div className='d-flex '>
        <div style={{ width: '8rem', height: '20px', padding: '8px', margin: '8px' }} className='d-flex'>
          <button ><span className='icons-items'><CheckBoxOutlineBlankIcon fontSize='small'/></span> </button>
          {/* <button><span className='icons-items'><ArrowDropDownIcon /></span></button> */}
          <button><span className='icons-items'><RefreshIcon fontSize='small'/></span></button>
          <button><span className='icons-items'><MoreVertIcon fontSize='small'/></span></button>
        </div>
      </div>

      <div className='sub-header d-flex'>
        <span className='items'>
          <button className='inbox-items'>
            <InboxIcon fontSize='small'/><span>Primary</span>
          </button>
        </span>
        <span className='items'>
          <button className='inbox-items'>
            <InboxIcon fontSize='small'/>
            <span>Promotions</span>
          </button>
        </span>
        <span className='items'>
          <button className='inbox-items'>
            <GroupOutlinedIcon fontSize='small'/><span>Social</span>
          </button>
        </span>
      </div>
      <div className='email'>
       
      </div>
    </div>
  )
}

export default Inbox