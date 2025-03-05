import { Stack } from "@mui/material";
import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import Avatar from "../../molecules/Avatar/Avatar";
import H2 from "../../atoms/H2/H2";
const Main = ({ homelist = "", searchList = "", categorylist = "" }) => {
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Button icon={<ChevronLeftRoundedIcon />} />
          <Button icon={<ChevronRightRoundedIcon />} />
          <Input />
        </Stack>
        <Avatar />
      </Stack>
      <Stack>
        <H2>Recently Played</H2>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          {}
        </Stack>
        <H2>Made For You</H2>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        ></Stack>
      </Stack>
    </>
  );
};

export default Main;
