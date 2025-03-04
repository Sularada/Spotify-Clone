import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <>
      <Card
        sx={{
          width: 200,
          height: 200,
          backgroundColor: "orange",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: "end",
        }}
      >
        <CardContent>
          <Typography
            sx={{ color: "white" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {category.name}
          </Typography>
        </CardContent>
        <CardMedia
          sx={{
            height: 100,
            width: 100,
            marginTop: "auto",
            transform: "rotate(30deg)",
            marginRight: "-10px",
            marginBottom: "-15px",
          }}
          image={category.icons[0].url}
          title={category.name}
        />
      </Card>
    </>
  );
};

export default CategoryCard;
