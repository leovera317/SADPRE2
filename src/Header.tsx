import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Header() {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "info.main",
          color: "white",
          width: "100%",
          borderRadius: 2
        }}
      >
        <Typography variant="h3">Bienvenid@ a SADPRE</Typography>
        <Typography variant="h6" sx={{ color: "text.disabled" }}>
          Sistema de Autodiagnóstico Preventivo para adultos mayores
        </Typography>
      </Box>
    </>
  );
}
