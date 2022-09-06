import * as React from "react";
import Typography from "@mui/material/Typography";
import Steps from "./Steps";
import { Box } from "@mui/material";

export default function App() {
  /*let sintomas = [];
  const Paciente = {
    sexo: "",
    edad: null,
    sintomas: []
  };*/

  return (
    <>
      <Box
        sx={{ textAlign: "center", backgroundColor: "blue", color: "white" }}
      >
        <Typography variant="h3">Bienvenid@ a SADPRE</Typography>
        <Typography variant="h6" sx={{ color: "violet" }}>
          Sistema de Autodiagnóstico Preventivo para adultos mayores
        </Typography>
      </Box>
      <Steps />
    </>
  );
}
