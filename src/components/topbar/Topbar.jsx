import React from 'react';
import logo from "./logo.png";
import './topbar.css';
import { NotificationsNone, Settings, Language } from '@mui/icons-material';
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <img src={logo} alt="" className="logo" />
                </div>


                <div className="topbarRight">


                    <div className="topbarIconContainer">
                        <div className="topbarIconBadge">
                            2</div>

                        <NotificationsNone />
                    </div>

                    <div className="topbarIconContainer">
                        

                        <Settings />
                    </div>

                    <div className="topbarIconContainer">
                       

                        <Language />
                    </div>






                    <img src="https://yt3.ggpht.com/yti/APfAmoG2jZLj6ennG1vKizgV43ss7vywhQmu7LdfPuau_g=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="topAvata" />

                </div>


            </div>

        </div>
    )
}
