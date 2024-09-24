import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import OrderManagement from "./orderManagement";
import OrderOverview from "./orderOverview";
import Aside from "./aside";

export default function MainLayout() {
  const [newOrderActive, setNewOrderACtive] = useState(false);

  return (
    <Box sx={{ padding: "15px 20px 15px 20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <OrderManagement
                setNewOrderACtive={setNewOrderACtive}
                newOrderActive={newOrderActive}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <OrderOverview />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Aside
            setNewOrderACtive={setNewOrderACtive}
            newOrderActive={newOrderActive}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
