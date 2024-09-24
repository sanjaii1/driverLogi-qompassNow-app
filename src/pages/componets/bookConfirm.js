import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Grid,
  IconButton,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Table,
  TableBody,
  Button,
} from "@mui/material";
import Booking from "../../assets/image/booking.png";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function BookConfirm({ open, handleClose, setNewOrderACtive }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropProps={{
        sx: {
          backgroundColor: "#095ef821",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
        }}
      >
        <Grid container spacing={1}>
          <Grid
            item
            xs={10}
            sm={10}
            md={10}
            lg={10}
            xl={10}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <IconButton
              sx={{
                width: 25,
                height: 25,
                borderRadius: 0,
                mr: 1,
              }}
              onClick={handleClose}
            >
              <ArrowBackIcon
                sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }}
              />
            </IconButton>{" "}
            <Typography sx={{ fontSize: "13px" }}>Back to Order</Typography>
          </Grid>
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            display={"flex"}
            justifyContent="flex-end"
          >
            <IconButton
              sx={{
                width: 18,
                height: 18,
                borderRadius: 0,
                mr: 1,
                border: "1px solid #ccc",
                backgroundColor: "#f5f5f5",
              }}
              onClick={handleClose}
            >
              <CloseIcon sx={{ fontSize: 17, color: "rgba(0, 0, 0, 0.7)" }} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Booking}
              alt="book"
              style={{ height: "55px", width: "55px" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: 550, fontSize: "16px" }}>
              Your Booking is Confirmed, Thank you!
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>
              Order confirmation details sent to Mobile and email
            </Typography>
          </Grid>
        </Grid>

        <Grid container sx={{ marginTop: "10px" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TableContainer>
              <Table>
                <TableHead sx={{ backgroundColor: "#095ef821" }}>
                  <TableRow>
                    <TableCell
                      colSpan={2}
                      sx={{ border: "1px solid grey", padding: "5px" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ fontWeight: 550, fontSize: "13px" }}>
                          Booked on 20-03-2024
                        </Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: "13px" }}>
                          Ernakulam unit hub
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid grey",
                        width: "40%",
                        padding: "5px",
                        fontSize: "12px",
                        color: "#000000",
                      }}
                    >
                      {" "}
                      AWB ID
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid grey",
                        width: "60%",
                        padding: "5px",
                        fontSize: "12px",
                        color: "#000000",
                      }}
                    >
                      RTBLR98752
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid grey",
                        padding: "5px",
                        fontSize: "12px",
                        width: "40%",
                        color: "#000000",
                      }}
                    >
                      From
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid grey",
                        padding: "5px",
                        width: "60%",
                        fontSize: "12px",
                        color: "#000000",
                      }}
                    >
                      FortKochi-682001
                    </TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid grey",
                        padding: "5px",
                        width: "40%",
                        fontSize: "12px",
                        color: "#000000",
                      }}
                    >
                      TO
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid grey",
                        padding: "5px",
                        width: "60%",
                        fontSize: "12px",
                        color: "#000000",
                      }}
                    >
                      KasaraGod-671121
                    </TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid grey",
                        padding: "5px",
                        width: "40%",
                        fontSize: "12px",
                        color: "#000000",
                      }}
                    >
                      Total Distance
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid grey",
                        padding: "5px",
                        width: "60%",
                        fontSize: "12px",
                        color: "#000000",
                      }}
                    >
                      612kms
                    </TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid grey",
                        padding: "5px",
                        width: "40%",
                        fontSize: "12px",
                        color: "#000000",
                      }}
                    >
                      Product Category
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid grey",
                        padding: "5px",
                        width: "60%",
                        fontSize: "12px",
                        color: "#000000",
                      }}
                    >
                      Electronics
                    </TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid grey",
                        padding: "5px",
                        width: "40%",
                        fontSize: "12px",
                        color: "#000000",
                      }}
                    >
                      Amount Paid
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid grey",
                        padding: "5px",
                        width: "60%",
                        fontSize: "12px",
                        color: "#000000",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CheckCircleIcon
                          sx={{
                            color: "green",
                            height: "15px",
                            width: "15px",
                            mr: 1,
                          }}
                        />{" "}
                        ₹2967.00
                      </Box>
                    </TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid grey",
                        padding: "5px",
                        width: "40%",
                        fontSize: "12px",
                        color: "#000000",
                      }}
                    >
                      EST Delivery Date
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid grey",
                        padding: "5px",
                        width: "60%",
                        fontSize: "12px",
                        color: "#000000",
                      }}
                    >
                      ORD123456
                    </TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell
                      colSpan={2}
                      sx={{ border: "1px solid grey", padding: "7px" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: "#3F48CC",
                        }}
                      >
                        <AddCircleOutlineIcon
                          sx={{ fontSize: "16px", mr: 1, cursor: "pointer" }}
                          onClick={() => {
                            setNewOrderACtive(false);
                            handleClose();
                          }}
                        />
                        <Typography
                          sx={{ fontSize: "14px", cursor: "pointer" }}
                          onClick={() => {
                            setNewOrderACtive(false);
                            handleClose();
                          }}
                        >
                          Create an another Order
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 2, display: "flex", gap: 2 }}>
          <Button
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#4276ed",
              color: "#fff",
              fontSize: "13px",
              "&:hover": {
                backgroundColor: "#4276ed",
                opacity: 1,
              },
            }}
          >
            View Order Confirmation
          </Button>
          <Button
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#4276ed",
              color: "#fff",
              fontSize: "13px",
              "&:hover": {
                backgroundColor: "#4276ed",
                opacity: 1,
              },
            }}
          >
            Download Receipt
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
}
