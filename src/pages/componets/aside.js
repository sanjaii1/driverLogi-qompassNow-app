import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function Aside() {
  return (
    <Box>
      <Box>
        <Accordion sx={{ background: "#095ef812" }}>
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
              <Box>
                <Typography sx={{ fontSize: "18px", fontWeight: 550 }}>
                  Order Summary
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "14px", fontWeight: 550 }}>
                  Total distance 56km
                </Typography>
              </Box>
            </Box>
          </AccordionSummary>
          <Divider />
          <AccordionDetails>
            <Typography
              sx={{ fontSize: "14px", whiteSpace: "nowrap", fontWeight: 550 }}
            >
              Pickup Address (
              <span style={{ color: "#3F48CC", cursor: "pointer" }}>Edit</span>)
            </Typography>
            <Typography sx={{ fontSize: "13px", fontWeight: 400 }}>
              Burger St, near Police Staticnort Nagar, Fort Kachi, Koch, Kerala
              682001, India Pickup Contact details
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: "14px", whiteSpace: "nowrap", fontWeight: 550 }}
            >
              Pickup Contact details
            </Typography>
            <Typography sx={{ fontSize: "13px", fontWeight: 400 }}>
              lack Goe +91 9876543210 | jark goe15215@gmail.com
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: "14px", whiteSpace: "nowrap", fontWeight: 550 }}
            >
              Pickup Time & Date
            </Typography>
            <Typography sx={{ fontSize: "13px", fontWeight: 400 }}>
              24/07/2024 | 16:00-20:00
            </Typography>
          </AccordionDetails>
          <Divider />
          <AccordionDetails>
            <Typography
              sx={{ fontSize: "14px", whiteSpace: "nowrap", fontWeight: 550 }}
            >
              Delivery Address (
              <span style={{ color: "#3F48CC", cursor: "pointer" }}>Edit</span>)
            </Typography>
            <Typography sx={{ fontSize: "13px", fontWeight: 400 }}>
              6/40, Mattanchery Cochin, Jew Town Rd, Emakulam, Kochi, Kerala
              682202, India
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: "14px", whiteSpace: "nowrap", fontWeight: 550 }}
            >
              Delivery Contact details
            </Typography>
            <Typography sx={{ fontSize: "13px", fontWeight: 400 }}>
              Napier +91 9876543210 | napier 5215@gmail.com
            </Typography>
          </AccordionDetails>
          <Divider />
          <AccordionDetails>
            <Typography
              sx={{ fontSize: "14px", whiteSpace: "nowrap", fontWeight: 550 }}
            >
              Product category
            </Typography>
            <Box
              sx={{
                border: "1px solid #095ef836",
                padding: "2px 3px 2px 3px",
                width: "fit-content",
                backgroundColor: "#095ef836",
                borderRadius: "4px",
                marginTop: "5px",
              }}
            >
              <Typography sx={{ fontSize: "13px", fontWeight: 400 }}>
                Electronics
              </Typography>
            </Box>
          </AccordionDetails>
          <Divider />
          <AccordionDetails>
            <Typography
              sx={{ fontSize: "14px", whiteSpace: "nowrap", fontWeight: 550 }}
            >
              Load category
            </Typography>
            <Box
              sx={{
                border: "1px solid #095ef836",
                padding: "2px 3px 2px 3px",
                width: "fit-content",
                backgroundColor: "#095ef836",
                borderRadius: "4px",
                marginTop: "5px",
              }}
            >
              <Typography sx={{ fontSize: "13px", fontWeight: 400 }}>
                Carton Box
              </Typography>
            </Box>
          </AccordionDetails>
          <Divider />
          <AccordionDetails
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>
              <ErrorOutlineIcon
                sx={{
                  verticalAlign: "middle",
                  marginRight: 1,
                  fontSize: "16px",
                }}
              />
              The estimated cost may vary from the final shipping cost based on
              the packaged dimensions & weight measured before delivery.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <Accordion sx={{ background: "#095ef812" }}>
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
              <Box>
                <Typography sx={{ fontSize: "18px", fontWeight: 550 }}>
                  {" "}
                  Payment Summary{" "}
                </Typography>
              </Box>
              <Box>
                {" "}
                <Typography sx={{ fontSize: "14px", fontWeight: 550 }}>
                  {" "}
                  Total Weight 284kg{" "}
                </Typography>
              </Box>
            </Box>
          </AccordionSummary>
          <Divider />

          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      borderRight: "1px solid #00000080",
                      width: "50%",
                      fontSize: "13px",
                      fontWeight: 550,
                    }}
                  >
                    Total Shipment Count
                  </TableCell>
                  <TableCell sx={{ width: "50%", fontSize: "13px" }}>
                    10.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderRight: "1px solid #00000080",
                      width: "50%",
                      fontSize: "13px",
                      fontWeight: 550,
                    }}
                  >
                    Base freight amount
                  </TableCell>
                  <TableCell sx={{ width: "50%", fontSize: "13px" }}>
                    10.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderRight: "1px solid #00000080",
                      width: "50%",
                      fontSize: "13px",
                      fontWeight: 550,
                    }}
                  >
                    Accessorial freight amount
                  </TableCell>
                  <TableCell sx={{ width: "50%", fontSize: "13px" }}>
                    546kg
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderRight: "1px solid #00000080",
                      width: "50%",
                      fontSize: "13px",
                      fontWeight: 550,
                    }}
                  >
                    Docket Charge
                  </TableCell>
                  <TableCell sx={{ width: "50%", fontSize: "13px" }}>
                   <CurrencyRupeeIcon /> 2016.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderRight: "1px solid #00000080",
                      width: "50%",
                      fontSize: "13px",
                      fontWeight: 550,
                    }}
                  >
                    Stationary Charge
                  </TableCell>
                  <TableCell sx={{ width: "50%", fontSize: "13px" }}>
                    50.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderRight: "1px solid #00000080",
                      width: "50%",
                      fontSize: "13px",
                      fontWeight: 550,
                    }}
                  >
                    Handling Charge (per Box)
                  </TableCell>
                  <TableCell sx={{ width: "50%", fontSize: "13px" }}>
                    500.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderRight: "1px solid #00000080",
                      width: "50%",
                      fontSize: "13px",
                      fontWeight: 550,
                    }}
                  >
                    GST 8%
                  </TableCell>
                  <TableCell sx={{ width: "50%", fontSize: "13px" }}>
                    200.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderRight: "1px solid #00000080",
                      width: "50%",
                      fontSize: "13px",
                      fontWeight: 550,
                    }}
                  >
                    SGST 8%
                  </TableCell>
                  <TableCell sx={{ width: "50%", fontSize: "13px" }}>
                    200.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderRight: "1px solid #00000080",
                      width: "50%",
                      fontSize: "13px",
                      fontWeight: 550,
                    }}
                  >
                    IGST 8%
                  </TableCell>
                  <TableCell sx={{ width: "50%", fontSize: "13px" }}>
                    00.00
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
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
          background: "#095ef812",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: 550 }}>
          Total Weight
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>000kg</Typography>
      </Box>
      <Box
        sx={{
          marginTop: "20px",
          borderRadius: "4px",
          boxShadow: 1,
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          background: "#095ef836",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: 550 }}>
          SUB Total
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>0000kg</Typography>
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
