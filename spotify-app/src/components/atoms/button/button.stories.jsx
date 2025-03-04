import Button from "./button";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
const meta = {
  component: Button,
};

export default meta;

export const Default = {
  args: {},
};
export const ArrowRightButton = {
  args: { icon: <ChevronRightRoundedIcon /> },
};
export const ArrowLeftButton = {
  args: {
    icon: <ChevronLeftRoundedIcon />,
  },
};
