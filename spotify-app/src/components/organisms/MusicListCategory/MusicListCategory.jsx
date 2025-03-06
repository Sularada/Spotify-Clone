import { useEffect, useState } from "react";
import { getPlaylistItems } from "../../../Services/WebAPI";
import MusicListItem from "../../molecules/MusicListItem/MusicListItem";
import { Stack } from "@mui/material";
import P from "../../atoms/P/P";

const MusicListCategory = ({ id }) => {
  const [items, setItems] = useState();
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetch = await getPlaylistItems(id);
        console.log(fetch);
        setItems(fetch.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
        margin="10px 0"
        borderBottom="1px solid white"
      >
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          gap="10px"
          alignItems="center"
        >
          <P text="#" color="white"></P>

          <P text="Title" color="white" />
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          gap="10px"
          width="50%"
        >
          <P text="Album" color="white" />
          <P text="Date Added" color="white" />
          <P text="Duration" color="white" />
        </Stack>
      </Stack>
      {items &&
        items.map((item, index) => {
          return <MusicListItem index={index} music={item} />;
        })}
    </>
  );
};

export default MusicListCategory;
