import Typography from "@mui/material/Typography";
function P({ text, color, variant = "" }) {
  return (
    <Typography
      color={color}
      variant={variant}
      gutterBottom
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      overflow="hidden"
      textAlign="left"
      display="block"
      title={text}
    >
      {text}
    </Typography>
  );
}
export default P;
