import { Stack } from "@mui/material";
import React from "react";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ReplayIcon from "@mui/icons-material/Replay";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import P from "../../atoms/P/P";
const Player = ({ music = "" }) => {
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
        <BorderLinearProgress variant="determinate" value={music.time || 50} />
        <P text="time" color="white"></P>
      </Stack>
    </Stack>
  );
};
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  width: "100%",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[800],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "green",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));
export default Player;
