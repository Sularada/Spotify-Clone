import { useEffect, useState } from "react";
import Page from "../../templates/Page/Page";
import { getPlaylistItems } from "../../../Services/WebAPI";

const HomePage = ({ homeplaylists, playlists, music, categories }) => {
  const [clickedCategory, setClickedCategory] = useState("Home");

  return (
    <>
      <Page
        category={clickedCategory}
        setClickedCategory={setClickedCategory}
        homeplaylists={homeplaylists}
        playlists={playlists}
        music={music}
        categories={categories}
      />
    </>
  );
};

export default HomePage;
