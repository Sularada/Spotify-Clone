import PageButton from "./pageButton";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const meta = {
  component: PageButton,
};

export default meta;

export const Default = {
  title: "Page Button",
  component: PageButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: () => {
      alert("clicked");
    },
  },
};
export const HomePageButton = {
  args: {
    label: "Home",
    startIcon: <HomeIcon />,
  },
};
export const SearchPageButton = {
  args: {
    label: "Search",
    startIcon: <SearchIcon />,
  },
};
export const YourLibraryPageButton = {
  args: {
    label: "Your Library",
    startIcon: <LibraryMusicIcon />,
  },
};
export const PlaylistPageButton = {
  args: {
    label: "Create Playlist",
    startIcon: <AddBoxIcon />,
  },
};
export const LikedSongsPageButton = {
  args: {
    label: "Create Playlist",
    startIcon: <FavoriteBorderIcon />,
  },
};
export const VibesOnlyPageButton = {
  args: {
    label: "VibesOnlyPageButton",
  },
};
