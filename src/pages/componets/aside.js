import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Aside() {
  return (
    <Box>
      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box>Order Summary</Box>
              <Box>Total distance 56km</Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box>Payment Summary</Box>
              <Box>Total Weight 284kg</Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box
        sx={{
          marginTop: "20px",
          borderRadius: "4px",
          boxShadow: 1,
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>Total Weight</Typography>
        <Typography>000kg</Typography>
      </Box>
      <Box
        sx={{
          marginTop: "20px",
          borderRadius: "4px",
          boxShadow: 1,
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>SUB Total</Typography>
        <Typography>0000kg</Typography>
      </Box>

      <Box
        sx={{
          padding: "20px",
        }}
      >
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={
            <Typography style={{ fontWeight: "bold" }}>
              I agree to the terms and conditions
            </Typography>
          }
        />
        <Typography>
          by checking this box, I confirm that I have read and agree to abide by
          the terms governing this transaction, including refund and
          cancellation policies
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ padding: "5px 30px 5px 30px", marginTop: "10px" }}
        >
          Pay INR 2976.52
        </Button>
      </Box>
    </Box>
  );
}
