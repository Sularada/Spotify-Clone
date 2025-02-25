import Typography from "@mui/material/Typography";
function P({ text, color, variant }) {
  return (
    <Typography color={color} variant={variant} gutterBottom>
      {text}
    </Typography>
  );
}
export default P;
