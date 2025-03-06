import { Stack } from "@mui/material";
import H4 from "../../atoms/H4/H4";
import CategoryCard from "../../molecules/CategoryCard/CategoryCard";

const SearchCategory = ({ categories }) => {
  return (
    <>
      <H4 text="Browse all" />
      <Stack
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
        gap="10px"
      >
        {categories.map((item) => {
          return <CategoryCard category={item} />;
        })}
      </Stack>
    </>
  );
};

export default SearchCategory;
