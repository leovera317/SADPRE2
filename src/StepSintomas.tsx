import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

export default function StepSintomas() {
  const sintomas = [
    "tos",
    "fiebre",
    "dolor de cabeza",
    "dolor de estómago",
    "dificultad respiratoria",
    "contractura"
  ];
  return (
    <>
      <Typography component="span" sx={{ mt: 2, mb: 1 }}>
        Seleccione sus síntomas:
      </Typography>
      <FormGroup row>
        {sintomas.map((sintoma) => (
          <FormControlLabel
            key={sintoma}
            control={<Checkbox />}
            label={sintoma}
          />
        ))}
      </FormGroup>
    </>
  );
}
