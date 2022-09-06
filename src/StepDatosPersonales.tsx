import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";

export default function StepDatosPersonales() {
  return (
    <Box sx={{ mt: 2, mb: 1 }}>
      <TextField
        sx={{ ml: 2, mb: 1 }}
        id="outlined-basic"
        label="Nombres"
        variant="outlined"
      />
      <TextField
        sx={{ ml: 2, mb: 2 }}
        id="outlined-basic"
        label="Apellido"
        variant="outlined"
      />
      <TextField
        type="number"
        sx={{ ml: 2, mb: 2 }}
        id="outlined-basic"
        label="Edad"
        variant="outlined"
        required
      />

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={["Masculino", "Femenino"]}
        sx={{ width: 200, ml: 2 }}
        renderInput={(params) => (
          <TextField {...params} label="Sexo" required />
        )}
      />
    </Box>
  );
}
