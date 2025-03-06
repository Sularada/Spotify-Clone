import { Stack } from "@mui/material";
import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import Avatar from "../../molecules/Avatar/Avatar";
import Grid from "@mui/material/Grid2";
import HomeCategory from "../HomeCategory/HomeCategory";
const Main = ({ clickedCategory = "", searchDisplay = "none", playlists }) => {
  return (
    <>
      <Grid
        size={{ xs: 12, sm: 8, md: 9 }}
        backgroundColor="#222223"
        padding="15px 30px"
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Button icon={<ChevronLeftRoundedIcon />} />
            <Button icon={<ChevronRightRoundedIcon />} />
            <Input sx={{ display: { searchDisplay } }} />
          </Stack>
          <Avatar />
        </Stack>
        <HomeCategory playlists={playlists} />
      </Grid>
    </>
  );
};

export default Main;
