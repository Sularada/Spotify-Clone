import StyledSearchInput from "./StyledSearchInput";
import InputAdornment from "@mui/material/InputAdornment";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
function Input() {
  return (
    <StyledSearchInput
      disableUnderline
      placeholder="What do you want to listen?"
      startAdornment={
        <InputAdornment position="start">
          <IconButton aria-label="description for action">
            <SearchIcon style={{ color: "black" }} />
          </IconButton>
        </InputAdornment>
      }
    />
  );
}
export default Input;
