import Grid from "@mui/material/Grid2";
import SideBar from "../../organisms/SideBar/SideBar";
import MusicPlayer from "../../organisms/MusicPlayer/MusicPlayer";
import Main from "../../organisms/Main/Main";
import { Stack } from "@mui/material";

const Page = ({
  homeplaylists,
  playlists,
  music,
  category,
  setClickedCategory,
  categories,
}) => {
  return (
    <>
      <Stack height="100%" overflow="hidden">
        <Grid container>
          <SideBar
            playLists={playlists}
            setClickedCategory={setClickedCategory}
          />
          <Main
            homeplaylists={homeplaylists}
            playlists={playlists}
            category={category}
            categories={categories}
          ></Main>
        </Grid>
        <MusicPlayer music={music} />
      </Stack>
    </>
  );
};

export default Page;
