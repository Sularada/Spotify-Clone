import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import P from "../../atoms/P/P";
import { Stack } from "@mui/material";
const MusicInfo = ({ music }) => {
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <img src={music.img_src} alt="music image" width="50px" height="50px" />
      <Stack>
        <P text={music.name} color="white" />
        <P text={music.writer} color="white" />
      </Stack>
      <FavoriteBorderIcon style={{ color: "white" }} />
    </Stack>
  );
};

export default MusicInfo;
