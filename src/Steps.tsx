import * as React from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material/";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepDatosPersonales from "./StepDatosPersonales";
import StepEnfermedadesPreexistentes from "./StepEnfermedadesPreexistentes";
import StepSintomas from "./StepSintomas";
import StepEnd from "./StepEnd";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const steps = ["Datos personales", "Enfermedades Preexistentes", "Síntomas"];

export default function Steps() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Términos del servicio
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign="center">
            Esta herramienta no ofrece asesoramiento médico, únicamente tiene
            fines informativos. No la use para sustituir el consejo médico
            profesional, diagnóstico o tratamiento. Si cree que puede tener una
            emergencia médica, llame inmediatamente a su médico o a emergencias.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Typography component="span">
        <br />
        <br />
      </Typography>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <StepEnd />
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
            <Button>Posibles Diagnósticos</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ mt: 2, mb: 1 }}>
            {activeStep === 0 ? (
              <StepDatosPersonales />
            ) : activeStep === 1 ? (
              <StepEnfermedadesPreexistentes />
            ) : (
              <StepSintomas />
            )}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
