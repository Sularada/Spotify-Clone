import { ThemeProvider } from "@mui/material/styles";
import StyledButton from "./styledButton";
import theme from "../../themes/darkTheme/DarkPageButtonTheme";
function Button({ icon }) {
  return <StyledButton color="dark">{icon} </StyledButton>;
}
export default Button;
