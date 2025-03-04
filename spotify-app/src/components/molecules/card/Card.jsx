import StyledCard from "./StyledCard";
import {
  StyledCardImageContainer,
  StyledCardImage,
} from "./CardImageContainer";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import H4 from "../../atoms/H4/H4";
import P from "../../atoms/P/P";
export default function CardUnit() {
  return (
    <StyledCard>
      <CardActionArea>
        <StyledCardImageContainer>
          <StyledCardImage
            component="img"
            height="140"
            image="https://picsum.photos/200"
            alt="green iguana"
          />
        </StyledCardImageContainer>
        <CardContent>
          <H4 text="Card Title" color="#f9f9f9"></H4>
          <P text="Card Bottom Text" color="#f9f9f9" variant="caption"></P>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}
