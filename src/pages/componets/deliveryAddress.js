import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

export default function DeliveryAddress({ open, handleClose }) {
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
          right: "0px",
          transform: "translate(-1%, -50%)",
          bgcolor: "background.paper",

          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
        }}
      >
        <Grid container spacing={1}>
          <Grid item>Delivery Details</Grid>{" "}
          <Grid item>
            {" "}
            <IconButton
              sx={{
                width: 25,
                height: 25,
                borderRadius: 0,
                mr: 1,
                border: "1px solid #ccc",
                backgroundColor: "#f5f5f5",
              }}
            >
              <AddIcon sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }} />
            </IconButton>{" "}
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={1}>
          <Grid item>1</Grid>
          <Grid item>2</Grid>
        </Grid>

        <Divider />

        <Grid container spacing={1}>
          <Grid item>
            <Typography>Billing Personal Details</Typography>
          </Grid>
          <Grid item>1</Grid>
          <Grid item>2</Grid>
          <Grid item>3</Grid>
          <Grid item>4</Grid>
        </Grid>
        <Divider />
        <Grid container spacing={1}>
          <Grid item>
            <Typography>Contact Details</Typography>
          </Grid>
          <Grid item>1</Grid>
          <Grid item>2</Grid>
          <Grid item>3</Grid>
          <Grid item>4</Grid>
          <Grid item>5</Grid>
          <Grid item>6</Grid>
        </Grid>
        <Divider />
        <Grid container spacing={1}>
          <Grid item>1</Grid>
          <Grid item>2</Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
