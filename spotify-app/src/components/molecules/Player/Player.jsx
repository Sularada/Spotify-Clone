import { Slider, Stack } from "@mui/material";
import React from "react";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ReplayIcon from "@mui/icons-material/Replay";
import P from "../../atoms/P/P";
import { useState } from "react";
const Player = ({ music = "" }) => {
  const [value, setValue] = useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <ShuffleIcon style={{ color: "white" }} />
        <SkipPreviousIcon style={{ color: "white" }} />
        <PlayCircleIcon style={{ color: "white", fontSize: "40px" }} />
        <SkipNextIcon style={{ color: "white" }} />
        <ReplayIcon style={{ color: "white" }} />
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <P text="time" color="white"></P>
        <Slider
          aria-label="MusicPlayer"
          value={value}
          onChange={handleChange}
          sx={{ color: "white" }}
        />

        <P text="time" color="white"></P>
      </Stack>
    </Stack>
  );
};

export default Player;
