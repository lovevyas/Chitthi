import React from "react";
import "../Header/Header.css";
import "../App.js";
import logo from "../Asset/small_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";

import StorefrontIcon from "@mui/icons-material/Storefront";

import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import { Link } from 'react-router-dom'; // Import Link
import { Add } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  const [{user} , dispatch] = useStateValue();

  return (
    <div className="header">
      {/* header left start*/}
      <div className="header__left">
        {/* logo image start*/}
        <img className="im" src={logo} alt="__logo" />
        {/* logo image end*/}

        {/* header input start */}
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Chitthi" type="text" />
        </div>
        {/* header input end */}
      </div>
      {/* header left end*/}

      {/* header middle start */}
      <div className="header__center">
        {/* header option start */}
        <div className="header__option header__option--active">
          
        
        <Link to="/"  >
        <HomeIcon fontSize="large" />
                            </Link>
                            </div>
        {/* header option end */}

        {/* header option start */}
        {/* <div className="header__option">
          <FlagIcon fontSize="large" />
        </div> */}
        {/* header option end */}

        {/* header option start */}
        {/* <div className="header__option">
          <SubscriptionsIcon fontSize="large" />
        </div> */}
        {/* header option end */}

        {/* header option start */}
        <div className="header__option">
          {/* Wrap StorefrontIcon with Link */}
          <Link to="/event-calendar">
            <StorefrontIcon fontSize="large" />
          </Link>
        </div>
        {/* header option end */}
        {/* header option start */}
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
        {/* header option end */}
      </div>
      {/* header middle end */}

      {/* header right start */}
      <div className="header__right">
        {/* header info start */}
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
          <IconButton>
            <Add />
          </IconButton>
          {/* <IconButton>
            <Forum />
          </IconButton>
          <IconButton>
            <NotificationsActive />
          </IconButton>
          <IconButton>
            <ExpandMore />
          </IconButton> */}
        </div>
        {/* header info end */}
      </div>
      {/* header right end */}
    </div>
  );
}

export default Header;
