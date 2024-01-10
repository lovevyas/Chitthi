import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

import { ExpandMoreOutlined } from "@mui/icons-material";


function Sidebar() {
  return(
    
    <div className="sidebar">
      <SidebarRow src='' title='Ayush Solanki'/>

      <SidebarRow Icon={LocalHospitalIcon}
      title="COVID-19 Information Center"/>

      <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>

      <SidebarRow Icon={PeopleIcon} title="Friends"/>

      <SidebarRow Icon={ChatIcon} title="Messenger"/>

      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />

      <SidebarRow Icon={VideoLibraryIcon} tittle="Videos"/>

      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>




  </div>
  );


}

export default Sidebar;
