import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function OrderManagement() {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid grey",
          padding: "10px",
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
            <Box
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Typography variant="h6">Order Management</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              display="flex"
              justifyContent={{
                xs: "center",
                sm: "flex-end",
              }}
            >
              <Button variant="contained" endIcon={<AddIcon />}>
                New Order
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container>
        <Grid item>1</Grid>
        <Grid item>2</Grid>
      </Grid>
    </Box>
  );
}
