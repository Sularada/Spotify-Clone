import { colors, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Input } from "@mui/material";
const StyledSearchInput = styled(Input)({
  width: "300px",
  margin: `0`,
  padding: `2px`,
  borderRadius: `30px`,
  borderBottom: "none",
  backgroundColor: "white",
  color: "black",
  "::placeholder": {
    opacity: "1",
    color: "black",
  },
});
export default StyledSearchInput;
