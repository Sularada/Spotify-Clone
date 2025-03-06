import StyledCard from "./StyledCard";
import {
  StyledCardImageContainer,
  StyledCardImage,
} from "./CardImageContainer";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import H6 from "../../atoms/H6/H6";
import P from "../../atoms/P/P";
export default function CardUnit({ item }) {
  return (
    <StyledCard>
      <CardActionArea>
        <StyledCardImageContainer>
          <StyledCardImage
            component="img"
            height="140"
            image={item.track.album.images[1].url}
            alt={item.track.album.name}
          />
        </StyledCardImageContainer>
        <CardContent>
          <H6 text={item.track.album.name} color="#f9f9f9"></H6>
          <P
            text={item.track.artists[0].name}
            color="#f9f9f9"
            variant="caption"
          ></P>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}
