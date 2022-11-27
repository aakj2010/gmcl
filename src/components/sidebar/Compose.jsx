import React from 'react'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

function Compose() {
    return (
        <div className='compose'>
            <EditOutlinedIcon fontSize='large' style={{ paddingLeft: "8px", color: "#5f6368" }} />
            <button style={{ paddingLeft: "8px" }}><span style={{ fontWeight: "500", color: "#5f6368" }}>Compose</span></button>
        </div>
    )
}

export default Compose