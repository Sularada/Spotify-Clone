import "./App.css";
import * as React from "react";
import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Grid2";
import getSavedALbums from "./Services/WebAPI";
import PageButton from "./components/atoms/pageButton/pageButton";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function App() {
  getSavedALbums();

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4, md: 3 }}>
          <Grid container>
            <Grid size={12}>
              <PageButton startIcon={<HomeIcon />} label="Home" />
            </Grid>
            <Grid size={12}>
              <PageButton startIcon={<SearchIcon />} label="Search" />
            </Grid>
            <Grid size={12}>
              <PageButton
                startIcon={<LibraryMusicIcon />}
                label="Your Library"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 9 }}></Grid>
        <Grid size={{ xs: 6, md: 4 }}></Grid>
        <Grid size={{ xs: 6, md: 8 }}></Grid>
      </Grid>
    </>
  );
}

export default App;
