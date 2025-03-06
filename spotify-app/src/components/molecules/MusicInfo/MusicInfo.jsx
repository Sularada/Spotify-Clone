import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import P from "../../atoms/P/P";
import { Stack } from "@mui/material";
const MusicInfo = ({ music }) => {
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <img
        src={music.track.album.images[2].url}
        alt="music image"
        width="50px"
        height="50px"
      />
      <Stack>
        <P text={music.track.album.name} color="white" />
        <P text={music.track.artists[0].name} color="white" />
      </Stack>
      <FavoriteBorderIcon style={{ color: "white" }} />
    </Stack>
  );
};

export default MusicInfo;
