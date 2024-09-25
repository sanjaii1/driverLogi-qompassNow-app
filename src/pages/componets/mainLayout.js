import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import OrderManagement from "./orderManagement";
import OrderOverview from "./orderOverview";
import Aside from "./aside";

export default function MainLayout() {
  const [newOrderActive, setNewOrderACtive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedLoadItem, setSelectedLoadItem] = useState(null);
  const [tableData, setTableData] = useState([
    {
      id: null,
      invoiceNo: "",
      loadType: "",
      loadQuantity: null,
      actualWeight: null,
      volumetric: { L: null, B: null, H: null },
      productCategory: "",
      hazmatClass: "",
    },
  ]);

  return (
    <Box sx={{ padding: "15px 20px 15px 20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <OrderManagement
                setNewOrderACtive={setNewOrderACtive}
                newOrderActive={newOrderActive}
                setTableData={setTableData}
                tableData={tableData}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                selectedLoadItem={selectedLoadItem}
                setSelectedLoadItem={setSelectedLoadItem}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <OrderOverview tableData={tableData} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Aside
            setNewOrderACtive={setNewOrderACtive}
            newOrderActive={newOrderActive}
            setTableData={setTableData}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            selectedLoadItem={selectedLoadItem}
            setSelectedLoadItem={setSelectedLoadItem}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
