import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import StyledAvatar from "./StyledAvatar";
import P from "../../atoms/P/P";
const Avatar = ({
  username = "Sularada",
  img_src = "https://picsum.photos/200",
}) => {
  return (
    <StyledAvatar direction="row" spacing={2}>
      <img
        src={img_src}
        alt="avatar"
        width="30px"
        height="30px"
        style={{ borderRadius: "50%" }}
      />
      <P text={username} color="white" />
      <ArrowDropDownIcon style={{ color: "white" }} />
    </StyledAvatar>
  );
};

export default Avatar;
