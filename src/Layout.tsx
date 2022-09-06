import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import Steps from "./Steps";
import Header from "./Header";
import NavBar from "./NavBar";

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: "1%",
        m: "1%",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx
      }}
      {...other}
    />
  );
}

export default function Layout() {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          p: 0,
          bgcolor: "background.paper",
          borderRadius: 1
        }}
      >
        <Item sx={{ flexShrink: 0, width: "96%" }}>
          <Header />
        </Item>
      </Box>
      <Box
        sx={{
          display: "flex",
          p: 0,
          bgcolor: "background.paper",
          borderRadius: 1
        }}
      >
        <Item sx={{ flexShrink: 0, width: "15%" }}>
          <NavBar />
        </Item>
        <Item sx={{ flexShrink: 0, width: "77%" }}>
          <Steps />
        </Item>
      </Box>
      <Box
        sx={{
          display: "flex",
          p: 0,
          bgcolor: "background.paper",
          borderRadius: 1
        }}
      >
        <Item sx={{ flexShrink: 0, width: "96%" }}>Footer</Item>
      </Box>
    </div>
  );
}
