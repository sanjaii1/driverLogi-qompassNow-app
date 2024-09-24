import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, Checkbox, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";

export default function DeliveryAddress({ open, handleClose }) {
  return (
    <Modal
      open={open}
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
          width: "45%",
          boxShadow: 24,
          borderRadius: "8px",
        }}
      >
        <Grid container spacing={1} sx={{ padding: " 16px 20px 0px 20px" }}>
          <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
            <Typography sx={{ fontWeight: 550, fontSize: "16px" }}>
              Delivery Details
            </Typography>
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
              <CloseIcon sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }} />
            </IconButton>
          </Grid>
        </Grid>
        <Divider sx={{ mb: 2 }} />
        <Grid
          container
          spacing={1}
          sx={{ mb: 2, padding: " 10px 20px 0px 20px" }}
        >
          <Grid item>1</Grid>
          <Grid item>2</Grid>
        </Grid>

        <Divider />

        <Grid
          container
          spacing={1}
          sx={{ mb: 2, padding: " 10px 20px 0px 20px" }}
        >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography sx={{ fontWeight: 550, fontSize: "15px" }}>
              Contact Details
            </Typography>
          </Grid>
          <Grid item xs={2} sm={6} md={6} lg={6} xl={6}>
            <label
              htmlFor="name"
              style={{
                display: "block",
                marginBottom: "4px",
                fontSize: "14px",
              }}
            >
              Delivery-Contact Name
            </label>
            <input
              id="name"
              type="text"
              style={{
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxSizing: "border-box",
                width: "100%",
              }}
              value={"xxxxxxxxxx"}
            />
          </Grid>
          <Grid item xs={2} sm={6} md={6} lg={6} xl={6}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "4px",
                fontSize: "14px",
              }}
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              style={{
                boxSizing: "border-box",
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              value={"xxxxxx@gmail.com"}
            />
          </Grid>
          <Grid item xs={2} sm={6} md={6} lg={6} xl={6}>
            <label
              htmlFor="pan"
              style={{
                display: "block",
                marginBottom: "4px",
                fontSize: "14px",
              }}
            >
              Delivery-Contact Number
            </label>
            <input
              id="pan"
              type="text"
              style={{
                boxSizing: "border-box",
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              defaultValue={"+91"}
            />
            <Typography sx={{ fontSize: "10px", opacity: 0.5, mt: 0.5 }}>
              We'll call this number to coordinate delivery
            </Typography>
          </Grid>
          <Grid item xs={2} sm={6} md={6} lg={6} xl={6}>
            <label
              htmlFor="pan"
              style={{
                display: "block",
                marginBottom: "4px",
                fontSize: "14px",
              }}
            >
              Delivery Secondary Contact Number(Optional)
            </label>
            <input
              id="pan"
              type="text"
              style={{
                boxSizing: "border-box",
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              defaultValue={"+91"}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          spacing={1}
          sx={{ mb: 2, padding: " 10px 20px 0px 20px" }}
        >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography sx={{ fontWeight: 550, fontSize: "15px" }}>
            Add Delivery Address
            </Typography>
          </Grid>
          <Grid item xs={2} sm={6} md={6} lg={6} xl={6}>
            <label
              htmlFor="picupName"
              style={{
                display: "block",
                marginBottom: "4px",
                fontSize: "14px",
              }}
            >
            Address Line01
            </label>
            <input
              id="picupName"
              type="text"
              style={{
                boxSizing: "border-box",
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              defaultValue={"St.Joseph's minor seminary University Road"}
            />
          </Grid>
          <Grid item xs={2} sm={6} md={6} lg={6} xl={6}>
            <label
              htmlFor="emailAddress"
              style={{
                display: "block",
                marginBottom: "4px",
                fontSize: "14px",
              }}
            >
            Address Line02
            </label>
            <input
              id="emailAddress"
              type="text"
              style={{
                boxSizing: "border-box",
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              defaultValue={"CUSAT"}
            />
          </Grid>
          <Grid item xs={2} sm={6} md={6} lg={6} xl={6}>
            <label
              htmlFor="deliConytactNumber"
              style={{
                display: "block",
                marginBottom: "4px",
                fontSize: "14px",
              }}
            >
            Building No
            </label>
            <input
              id="deliConytactNumber"
              type="text"
              style={{
                boxSizing: "border-box",
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              defaultValue={"B1,23/670"}
            />
          </Grid>{" "}
          <Grid item xs={2} sm={6} md={6} lg={6} xl={6}>
            <label
              htmlFor="picsec"
              style={{
                display: "block",
                marginBottom: "4px",
                fontSize: "14px",
              }}
            >
            Street name
            </label>
            <input
              id="picsec"
              type="text"
              style={{
                boxSizing: "border-box",
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              defaultValue={"PO, Kochi"}
            />
          </Grid>{" "}
          <Grid item xs={2} sm={6} md={6} lg={6} xl={6}>
            <label
              htmlFor="panNo"
              style={{
                display: "block",
                marginBottom: "4px",
                fontSize: "14px",
              }}
            >
            Pin code
            </label>
            <input
              id="panNo"
              type="text"
              style={{
                boxSizing: "border-box",
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              value={"682022"}
            />
          </Grid>{" "}
          <Grid item xs={2} sm={6} md={6} lg={6} xl={6}>
            <label
              htmlFor="gst"
              style={{
                display: "block",
                marginBottom: "4px",
                fontSize: "14px",
              }}
            >
              City
            </label>
            <input
              id="Gst"
              type="text"
              style={{
                boxSizing: "border-box",
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              defaultValue={"Kochi"}
            />
          </Grid>{" "}
        </Grid>
        <Divider />

        <Grid
          container
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2, padding: "10px 20px 0px 20px" }}
        >
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Box>
              <Box display="flex" alignItems="center">
                <Checkbox
                  sx={{
                    width: "18px",
                    height: "18",
                    mr: 1,
                  }}
                />
                <Typography sx={{ fontSize: "14px", fontWeight: 550 }}>
                  Privacy Policy
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "12px" }}>
                  You acknowledge that you have read and understood our Privacy
                  Policy outlining how we collect, use, and protect your
                  personal information.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            display="flex"
            justifyContent="flex-end"
          >
            <Button
              sx={{
                textTransform: "capitalize",
                backgroundColor: "#5CB85C",
                color: "#fff",
                fontSize: "13px",
                height: "30px",
                "&:hover": {
                  backgroundColor: "#5CB85C",
                  opacity: 1,
                },
              }}
              onClick={handleClose}
            >
              Add Details
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
