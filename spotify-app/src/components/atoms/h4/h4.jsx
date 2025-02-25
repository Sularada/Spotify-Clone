import Typography from "@mui/material/Typography";
function H4({ text, color }) {
  return (
    <Typography color={color} variant="h4" gutterBottom>
      {text}
    </Typography>
  );
}
export default H4;
