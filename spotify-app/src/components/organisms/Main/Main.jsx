import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import Avatar from "../../molecules/Avatar/Avatar";
import Grid from "@mui/material/Grid2";
import HomeCategory from "../HomeCategory/HomeCategory";
import SearchCategory from "../SearchCategory/SearchCategory";
import MusicListCategory from "../MusicListCategory/MusicListCategory";
const Main = ({ category, homeplaylists, categories }) => {
  const [searchDisplay, setSearchDisplay] = useState("none");

  useEffect(() => {
    if (category !== "Search") {
      setSearchDisplay("none");
    } else {
      setSearchDisplay("flex");
    }
  }, [category]);
  function handleCategories() {
    if (category == "Home") {
      return <HomeCategory playlists={homeplaylists} />;
    } else if (category == "Search") {
      return <SearchCategory categories={categories} />;
    } else {
      return <MusicListCategory id={category} />;
    }
  }

  return (
    <>
      <Grid
        size={{ xs: 12, sm: 8, md: 9 }}
        backgroundColor="#222223"
        padding="15px 30px"
        sx={{ overflowY: "scroll", overflowX: "hidden", height: "85vh" }}
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
            <Input display={searchDisplay} />
          </Stack>
          <Avatar />
        </Stack>
        {handleCategories()}
      </Grid>
    </>
  );
};

export default Main;
