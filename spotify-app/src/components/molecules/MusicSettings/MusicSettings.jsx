import { Slider, Stack, styled } from "@mui/material";
import { useState } from "react";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import ComputerIcon from "@mui/icons-material/Computer";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
const MusicSettings = ({ music = "" }) => {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <HorizontalSplitIcon style={{ color: "white" }} />
      <ComputerIcon style={{ color: "white" }} />
      <VolumeDownIcon style={{ color: "white" }} />
      <Slider
        sx={{ minWidth: 60, color: "white" }}
        aria-label="Volume"
        value={value}
        onChange={handleChange}
      />
      <FullscreenIcon style={{ color: "white" }} />
    </Stack>
  );
};

export default MusicSettings;
