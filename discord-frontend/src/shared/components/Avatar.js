// import React from "react";
// import { styled } from "@mui/system";

// const AvatarPreview = styled("div")({
//   // height: "42px",
//   // width: "42px",
//   backgroundColor: "#5865f2",
//   borderRadius: "42px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   fontSize: "20px",
//   fontWeight: "700",
//   marginLeft: "5px",
//   color: "white",
// });

// const Avatar = ({ username, large }) => {
//   // console.log('username is type ',typeof username)
//   // console.log('username is  ', username)
  
//   const nameForIcon = (username || '').substring(0,2);
//   console.log('icon is ', large);

//   return (
//     <AvatarPreview style={{ height: "42px", width: "42px" }}>
//     {/* // <AvatarPreview large ? style={{ height: "42px", width: "42px" }} : style={{ height: '30px', width: '30px', fontSize: '15px'}}> */}
//       {nameForIcon}
//     </AvatarPreview>
//   );
// };

// export default Avatar;


import React from "react";
import { styled } from "@mui/system";

const AvatarPreview = styled("div")({
  height: "42px",
  width: "42px",
  backgroundColor: "#5865f2",
  borderRadius: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "700",
  marginLeft: "5px",
  color: "white",
});

const Avatar = ({ username, large }) => {
  return (
    <AvatarPreview style={large ? { height: "80px", width: "80px" } : {}}>
      {username.substring(0, 2)}
    </AvatarPreview>
  );
};

export default Avatar;