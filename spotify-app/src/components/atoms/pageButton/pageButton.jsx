import { StyledPageButton } from "../../styledComponents/PageButton";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../themes/darkTheme/DarkPageButtonTheme";
export default function PageButton({ label, startIcon }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledPageButton startIcon={startIcon} variant="contained" color="dark">
        {label}
      </StyledPageButton>
    </ThemeProvider>
  );
}
PageButton.propTypes = {
  label: PropTypes.string.isRequired,
};
