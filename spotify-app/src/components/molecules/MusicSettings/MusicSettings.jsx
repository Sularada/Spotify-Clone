import { Stack, styled } from "@mui/material";
import React from "react";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import ComputerIcon from "@mui/icons-material/Computer";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
const MusicSettings = ({ music = "" }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <HorizontalSplitIcon style={{ color: "white" }} />
      <ComputerIcon style={{ color: "white" }} />
      <VolumeDownIcon style={{ color: "white" }} />
      <BorderLinearProgress variant="determinate" value={music.time || 100} />
      <FullscreenIcon style={{ color: "white" }} />
    </Stack>
  );
};
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  width: "100px",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "white",
  },
}));
export default MusicSettings;
