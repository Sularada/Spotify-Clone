import Typography from "@mui/material/Typography";

function H2({ text, color = "white" }) {
  return (
    <Typography color={color} variant="h2" gutterBottom>
      {text}
    </Typography>
  );
}
export default H2;
