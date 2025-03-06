import React from "react";
import P from "../../atoms/P/P";
import { Stack } from "@mui/material";

const MusicListItem = ({ index, music }) => {
  return (
    <Stack
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      gap="10px"
      margin="10px 0"
    >
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
        alignItems="center"
      >
        <P text={index + 1} color="white"></P>
        <img
          width={50}
          height={50}
          src={music?.track?.album?.images[2].url || "Bilinmiyor"}
          alt={music?.track?.album?.name || "Bilinmiyor"}
        />
        <P text={music?.track?.album?.name || "Bilinmiyor"} color="white" />
        <P
          text={music?.track?.artists[0]?.name || "Bilinmiyor"}
          color="white"
        />
      </Stack>
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="10px"
        width="50%"
      >
        <P
          text={music?.track?.album?.album_type || "Bilinmiyor"}
          color="white"
        />
        <P text={music.added_at || "Bilinmiyor"} color="white" />
        <P text={music?.track?.duration || "Bilinmiyor"} color="white" />
      </Stack>
    </Stack>
  );
};

export default MusicListItem;
