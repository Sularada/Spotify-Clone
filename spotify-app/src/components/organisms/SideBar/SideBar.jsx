import React from "react";
import Grid from "@mui/material/Grid2";
import PageButton from "./components/atoms/pageButton/pageButton";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const SideBar = () => {
  return (
    <Grid size={{ xs: 12, sm: 4, md: 3 }}>
      <Grid container>
        <Grid size={12}>
          <PageButton startIcon={<HomeIcon />} label="Home" />
        </Grid>
        <Grid size={12}>
          <PageButton startIcon={<SearchIcon />} label="Search" />
        </Grid>
        <Grid size={12}>
          <PageButton startIcon={<LibraryMusicIcon />} label="Your Library" />
        </Grid>
        <Grid size={12}>
          <PageButton startIcon={<AddBoxIcon />} label="Create Playlist" />
        </Grid>
        <Grid size={12}>
          <PageButton startIcon={<FavoriteBorderIcon />} label="Liked Songs" />
        </Grid>
        <hr />
      </Grid>
    </Grid>
  );
};

export default SideBar;
