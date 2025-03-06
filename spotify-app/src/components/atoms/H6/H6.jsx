import Typography from "@mui/material/Typography";
function H6({ text, color = "white" }) {
  return (
    <Typography
      color={color}
      variant="h6"
      gutterBottom
      noWrap="true"
      title={text}
    >
      {text}
    </Typography>
  );
}
export default H6;
