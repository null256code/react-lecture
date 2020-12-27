import React from "react";
import { Box, Button, Link as MuLink } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const Top: React.FC = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/timeconfirm");
  };
  return (
    <Box padding={"16px"} display={"flex"} flexDirection={"column"}>
      <a href="/timeconfirm">aタグ</a>
      <MuLink href={"/timeconfirm"}>Linkタグ(Material UI)</MuLink>
      <Link to={"/timeconfirm"}>Linkタグ(React-Router)</Link>
      <Button
        style={{ width: 200 }}
        variant={"contained"}
        onClick={(e) => handleClick()}
      >
        onClick
      </Button>
    </Box>
  );
};

export default Top;
