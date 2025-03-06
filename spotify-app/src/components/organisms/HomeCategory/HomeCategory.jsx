import { Stack } from "@mui/material";
import React from "react";
import H4 from "../../atoms/H4/H4";
import CardUnit from "../../molecules/Card/Card";

const HomeCategory = ({ playlists }) => {
  return (
    <Stack>
      <H4 text="Recently played" />
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        {playlists[0].map((item) => {
          return <CardUnit item={item} />;
        })}
      </Stack>
      <H4 text="Made for you" />
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        marginBottom={10}
      >
        {" "}
        {playlists[1].map((item) => {
          return <CardUnit item={item} />;
        })}
      </Stack>
    </Stack>
  );
};

export default HomeCategory;
