import { Stack } from "@mui/material";
import React from "react";
import MusicInfo from "../../molecules/MusicInfo/MusicInfo";
import Player from "../../molecules/Player/Player";
import MusicSettings from "../../molecules/MusicSettings/MusicSettings";
const MusicPlayer = ({ music }) => {
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
          backgroundColor: "#171818",
          padding: "20px",
        }}
      >
        <MusicInfo music={music} />
        <Player sx={{ flexGrow: 1 }} />
        <MusicSettings />
      </Stack>
    </>
  );
};

export default MusicPlayer;
