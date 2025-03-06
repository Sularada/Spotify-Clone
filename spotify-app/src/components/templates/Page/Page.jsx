import Grid from "@mui/material/Grid2";
import SideBar from "../../organisms/SideBar/SideBar";
import Main from "../../organisms/Main/Main";

const Page = ({ homeplaylists, playlists }) => {
  return (
    <>
      <Grid container>
        <SideBar playLists={playlists} />
        <Main playlists={homeplaylists}></Main>
      </Grid>
    </>
  );
};

export default Page;
