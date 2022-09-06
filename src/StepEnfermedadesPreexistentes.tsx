import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

export default function StepEnfermedadesPreexistentes() {
  const enfermedadesPre = [
    "Diabetes",
    "Obesidad",
    "Asma",
    "Insuficiencia Cardíaca"
  ];
  return (
    <>
      <Typography component="span" sx={{ mt: 2, mb: 1 }}>
        Seleccione sus enfermedades preexistentes:
      </Typography>
      <FormGroup row>
        {enfermedadesPre.map((enfermedad) => (
          <FormControlLabel
            key={enfermedad}
            control={<Checkbox />}
            label={enfermedad}
          />
        ))}
      </FormGroup>
    </>
  );
}
