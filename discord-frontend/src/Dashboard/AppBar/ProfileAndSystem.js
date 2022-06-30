import React from 'react';

import Button from "@mui/material/Button";
import { Typography } from '@mui/material';

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

import { logout } from "../../shared/utils/auth";
import Avatar from '../../shared/components/Avatar';

const Profile = (accountName) => {    

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const properAccountName = accountName.accountName.accountName;
  return (
    <>
      <Button
        style={{
          width: "13%",
          height: "48px",
          display: "flex",
          marginLeft: '75%',
          alignItems: "center",
          justifyContent: "flex-start",
          textTransform: "none",
          color: "white",
        }}
        onClick={handleMenuOpen}
      >
        <Typography
          style={{
            // marginLeft: "7px",
            fontWeight: 700,
            color: "#8e9297",
          }}
          variant="subtitle1"
          align="left"
        >
          {properAccountName}
        </Typography>
        <AccountCircleIcon />
        <SettingsIcon />
        {/* <Avatar
          username={properAccountName} 
          large={false}
        /> */}
        <ArrowDropDownIcon/>
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          color: "#36393f",
        }}
        >
        <MenuItem onClick={logout}>
          Logout
        </MenuItem>

        <MenuItem sx={{color: 'red'}}>Delete Account</MenuItem>
      </Menu>
    </>
  );
};

export default Profile;