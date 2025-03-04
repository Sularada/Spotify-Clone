import { IconButton, styled } from "@mui/material";

const StyledButton = styled(IconButton)({
  margin: `0`,
  padding: `0`,
  width: `30px`,
  height: `30px`,
  borderRadius: "50%",
  backgroundColor: "black",
  color: "white",
  ":hover": {
    backgroundColor: "black",
    color: "white",
  },
});
export default StyledButton;
