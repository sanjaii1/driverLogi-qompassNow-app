import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import Lottie from "lottie-react";
import animationData from "../../assets/json/Animation - 1727198354857.json";

export default function AddOrder({ open, handleClose, setNewOrderACtive }) {
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
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: 120, height: 120 }}
        />

        <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
          Your Order Added
        </Typography>
        <Button
          sx={{
            textTransform: "capitalize",
            backgroundColor: "#095ef821",
            color: "#000000",
            fontSize: "13px",
            height: "25px",
            mt: 1,
            "&:hover": {
              backgroundColor: "#095ef821",
              opacity: 1,
            },
          }}
          onClick={() => {
            handleClose();
            setNewOrderACtive(true);
          }}
        >
          Ok
        </Button>
      </Box>
    </Modal>
  );
}
