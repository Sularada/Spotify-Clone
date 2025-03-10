import Typography from "@mui/material/Typography";
function H4({ text, color = "white" }) {
  return (
    <Typography
      sx={{ margin: "10px 0" }}
      color={color}
      variant="h4"
      gutterBottom
    >
      {text}
    </Typography>
  );
}
export default H4;
