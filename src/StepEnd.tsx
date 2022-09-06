import * as React from "react";
import Typography from "@mui/material/Typography";

export default function StepEnd() {
  return (
    <>
      <Typography component="span" sx={{ mt: 2, mb: 1 }}>
        Todos los pasos fueron completados. Presione "Posibles Diagnósticos"
      </Typography>
    </>
  );
}
