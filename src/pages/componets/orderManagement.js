import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Electronics from "../../assets/image/electronic.png";
import Consumables from "../../assets/image/consumables.png";
import Sports from "../../assets/image/cricket.png";
import Truck from "../../assets/image/truck.png";
import Clothes from "../../assets/image/hanger.png";
import HouseHold from "../../assets/image/sofa.png";
import CartonBox from "../../assets/image/carton.png";
import WoodenBox from "../../assets/image/wooden.png";
import Plastic from "../../assets/image/plastic.png";
import { Formik, Form, Field } from "formik";
import AddOrder from "./addOrder";

export default function OrderManagement({ setNewOrderACtive, newOrderActive }) {
  const [selectProductCateActive, setSelectProductCateActive] = useState(false);
  const [selectLoadTypeActive, setSelectLoadTypeActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedLoadItem, setSelectedLoadItem] = useState(null);
  const [openAddOrder, setOpenAddOrder] = React.useState(false);

  const initialValues = {
    length: "",
    breadth: "",
    height: "",
    actualWeight: "",
    invoiceNo: "",
  };

  const productItem = [
    { name: "Consumables", src: Consumables },
    { name: "Electronics", src: Electronics },
    { name: "Sports Equipment", src: Sports },
    { name: "Clothes Item", src: Clothes },
    { name: "Household Item", src: HouseHold },
    { name: "Other", src: Truck },
  ];

  const LoadItem = [
    { name: "Carton Box", src: CartonBox },
    { name: "Wooden Box", src: WoodenBox },
    { name: "Plastic", src: Plastic },
    { name: "Other", src: Truck },
  ];

  const productBoxHandleClick = (itemName) => {
    setSelectedItem(itemName);
    setSelectProductCateActive(false);
    setSelectLoadTypeActive(true);
  };
  const handleNewOrderClick = () => {
    setSelectProductCateActive(false);
    setSelectLoadTypeActive(false);
    setSelectedItem(null);
    setSelectedLoadItem(null);
    setNewOrderACtive(false);
  };

  const handleCloseAddOrder = () => setOpenAddOrder(false);

  const handleSubmit = (values, resetForm) => {
    console.log("Form Values:", values);

    resetForm();
    setOpenAddOrder(true);
  };

  const restrictToNumbers = (e) => {
    if (
      !/[0-9]/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight" &&
      e.key !== "Tab"
    ) {
      e.preventDefault();
    }
  };

  return (
    <Box
      sx={{
        border: "1px solid #5855551f",
        borderRadius: "4px",
        boxShadow: "0px 4px 12px #5855551f",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid #5855551f",
          padding: "10px",
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 550, fontSize: "17px" }}
              >
                Order Management
              </Typography>
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
              <Button
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "#4276ed",
                  color: "#fff",
                  fontSize: "13px",
                  height: "25px",
                  "&:hover": {
                    backgroundColor: "#4276ed",
                    opacity: 1,
                  },
                }}
                endIcon={<AddIcon />}
                onClick={() => handleNewOrderClick()}
              >
                New Order
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: "10px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {selectProductCateActive === false ? (
              <Box
                sx={{
                  padding: "10px",
                  borderRadius: "4px",
                  // boxShadow: 3,
                  border: "1px solid #5855551f",
                  backgroundColor: "#095ef812",
                }}
              >
                <Grid container>
                  <Grid item xs={12} sm={6} md={6} lg={8} xl={8}>
                    <Typography
                      sx={{
                        color: "#000000",
                        fontWeight: 550,
                        fontSize: "14px",
                      }}
                    >
                      Product category
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                    <Box
                      sx={{
                        border: "1px solid #5855551f",
                        borderRadius: "2px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          flex: 2,
                          padding: "2px 2px 2px 10px",
                          backgroundColor: "#fff",
                          minHeight: "24px",
                          fontSize: "13px",
                          fontWeight: 550,
                        }}
                      >
                        {selectedItem || ""}
                      </Typography>

                      <Typography
                        onClick={() => setSelectProductCateActive(true)}
                        sx={{
                          flex: 1,
                          backgroundColor: "#095ef821",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        Change
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ) : (
              <Box
                sx={{
                  padding: "10px",
                  borderRadius: "4px",
                  boxShadow: 6,
                  border: "1px solid #5855551f",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography sx={{ color: "#000000", fontWeight: 550 }}>
                      Select Product category
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container spacing={1}>
                      {productItem.map((item, index) => (
                        <Grid
                          item
                          xs={6}
                          sm={3}
                          md={3}
                          lg={2}
                          xl={2}
                          container
                          justifyContent="center"
                          alignItems="center"
                          key={index}
                        >
                          <Box
                            onClick={() => productBoxHandleClick(item.name)}
                            sx={{
                              width: "110px",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              border: "1px solid #5855555c",
                              padding: "10px",
                              borderRadius: "4px",
                              backgroundColor:
                                selectedItem === item.name
                                  ? "#095ef812"
                                  : "transparent",
                              cursor: "pointer",
                            }}
                          >
                            <img
                              alt={item.name}
                              src={item.src}
                              style={{
                                height: "50px",
                                width: "50px",
                                marginBottom: "5px",
                              }}
                            />
                            <Typography
                              sx={{
                                fontSize: "12px",
                                fontWeight: 550,
                                color: "#000000",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {item.name}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {selectLoadTypeActive === false ? (
              <Box
                sx={{
                  padding: "10px",
                  borderRadius: "4px",
                  // boxShadow: 1,
                  border: "1px solid #5855551f",
                  backgroundColor: "#095ef812",
                }}
              >
                <Grid container>
                  <Grid item xs={12} sm={6} md={6} lg={8} xl={8}>
                    <Typography
                      sx={{
                        color: "#000000",
                        fontWeight: 550,
                        fontSize: "14px",
                      }}
                    >
                      Load type
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                    <Box
                      sx={{
                        border: "1px solid #5855551f",
                        borderRadius: "2px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          flex: 2,
                          padding: "2px 2px 2px 10px",
                          backgroundColor: "#fff",
                          minHeight: "24px",
                          fontSize: "13px",
                          fontWeight: 550,
                        }}
                      >
                        {selectedLoadItem || ""}
                      </Typography>

                      <Typography
                        onClick={() => setSelectLoadTypeActive(true)}
                        sx={{
                          flex: 1,
                          backgroundColor: "#095ef821",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        Change
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ) : (
              <Box
                sx={{
                  padding: "10px",
                  borderRadius: "4px",
                  boxShadow: 6,
                  border: "1px solid #5855551f",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography sx={{ color: "#000000", fontWeight: 550 }}>
                      Select Load type
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container spacing={1}>
                      {LoadItem.map((item, index) => (
                        <Grid
                          item
                          xs={6}
                          sm={3}
                          md={3}
                          lg={2}
                          xl={2}
                          container
                          justifyContent="center"
                          alignItems="center"
                          key={index}
                        >
                          <Box
                            onClick={() => setSelectedLoadItem(item.name)}
                            sx={{
                              width: "110px",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              border: "1px solid #5855555c",
                              padding: "10px",
                              borderRadius: "4px",
                              backgroundColor:
                                selectedLoadItem === item.name
                                  ? "#095ef812"
                                  : "transparent",
                              cursor: "pointer",
                            }}
                          >
                            <img
                              alt={item.name}
                              src={item.src}
                              style={{
                                height: "50px",
                                width: "50px",
                                marginBottom: "5px",
                              }}
                            />
                            <Typography
                              sx={{
                                fontSize: "12px",
                                fontWeight: 550,
                                color: "#000000",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {item.name}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              height: "41px",
                              padding: "0 16px",
                              backgroundColor: "#4276ed",
                              borderTopLeftRadius: "4px",
                              borderBottomLeftRadius: "4px",
                              color: "#fff",
                            }}
                          >
                            Enter Load Quantity
                          </Box>
                          <TextField
                            inputProps={{
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                            }}
                            onKeyDown={(e) => restrictToNumbers(e)}
                            variant="outlined"
                            sx={{
                              "& .MuiOutlinedInput-input": {
                                padding: "8px",
                                borderRadius: "0px",
                                border: "1px solid #4276ed",
                                borderTopRightRadius: "4px",
                                borderBottomRightRadius: "4px",
                              },
                              width: "100px",
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={4}
                        xl={4}
                        sx={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <Button
                          onClick={() => setSelectLoadTypeActive(false)}
                          variant="outlined"
                          sx={{
                            textTransform: "capitalize",
                            fontSize: "13px",
                            color: "#000000",
                            fontWeight: 550,
                            borderColor: "#000000",
                            "&:hover": {
                              color: "#000000",
                              borderColor: "#000000",
                            },
                          }}
                        >
                          Proceed
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box
              sx={{
                borderRadius: "4px",
                // boxShadow: 1,
                border: "1px solid #5855551f",

                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#095ef812",
              }}
            >
              <Formik
                initialValues={initialValues}
                onSubmit={(values, { resetForm }) => {
                  handleSubmit(values, resetForm);
                }}
              >
                {({ values, handleChange }) => (
                  <Form>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "5px",
                          }}
                        >
                          <Typography
                            sx={{
                              marginRight: 1,
                              fontSize: "14px",
                              fontWeight: 550,
                              color: "#000000",
                            }}
                          >
                            Volumetric
                          </Typography>

                          <Grid container spacing={1.4} sx={{ flexGrow: 2 }}>
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                              <Field
                                inputProps={{
                                  inputMode: "numeric",
                                  pattern: "[0-9]*",
                                }}
                                name="length"
                                placeholder="Length"
                                type="text"
                                onKeyDown={(e) => restrictToNumbers(e)}
                                style={{
                                  width: "100%",
                                  padding: "5px",
                                  border: "1px solid #ccc",
                                }}
                              />
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                              <Field
                                inputProps={{
                                  inputMode: "numeric",
                                  pattern: "[0-9]*",
                                }}
                                onKeyDown={(e) => restrictToNumbers(e)}
                                name="breadth"
                                placeholder="Breadth"
                                type="text"
                                style={{
                                  width: "100%",
                                  padding: "5px",
                                  border: "1px solid #ccc",
                                }}
                              />
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                              <Field
                                inputProps={{
                                  inputMode: "numeric",
                                  pattern: "[0-9]*",
                                }}
                                onKeyDown={(e) => restrictToNumbers(e)}
                                name="height"
                                placeholder="Height"
                                type="text"
                                style={{
                                  width: "100%",
                                  padding: "5px",
                                  border: "1px solid #ccc",
                                }}
                              />
                            </Grid>
                          </Grid>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "10px",
                              padding: "0px 0px 0px 5px",
                              color: "#0000008f",
                            }}
                          >
                            Lenght + Breadth + Height should be at-least 15 cm
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={3.5} xl={3.5}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "5px",
                          }}
                        >
                          <Typography
                            sx={{
                              marginRight: 1,
                              whiteSpace: "nowrap",
                              fontSize: "14px",
                              fontWeight: 550,
                              color: "#000000",
                            }}
                          >
                            Actual weight
                          </Typography>

                          <Grid container spacing={1.4} sx={{ flexGrow: 1 }}>
                            <Grid item xs={8} sm={8} md={8}>
                              <Field
                                inputProps={{
                                  inputMode: "numeric",
                                  pattern: "[0-9]*",
                                }}
                                onKeyDown={(e) => restrictToNumbers(e)}
                                name="actualWeight"
                                placeholder="Weight"
                                type="text"
                                style={{
                                  width: "100%",
                                  padding: "5px",
                                  border: "1px solid #ccc",
                                }}
                              />
                            </Grid>
                            <Grid item xs={4} sm={4} md={4}>
                              <input
                                value={"Kg"}
                                style={{
                                  width: "100%",
                                  padding: "5px",
                                  border: "1px solid #ccc",
                                }}
                              />
                            </Grid>
                          </Grid>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "10px",
                              padding: "0px 0px 0px 5px",
                              color: "#0000008f",
                            }}
                          >
                            Packaged weight should be at-least 50 grms
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={2.5} xl={2.5}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "5px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "14px",
                              fontWeight: 550,
                              color: "#000000",
                              marginRight: 1,
                            }}
                          >
                            Invoice NO
                          </Typography>

                          <Field
                            name="invoiceNo"
                            placeholder="00000000"
                            type="text"
                            style={{
                              width: "100%",
                              padding: "5px",
                              border: "1px solid #ccc",
                            }}
                          />
                        </Box>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={2}
                        xl={2}
                        sx={{ textAlign: "right", marginTop: "5px" }}
                      >
                        <Button
                          type="submit"
                          sx={{
                            textTransform: "capitalize",
                            backgroundColor: "#fff",
                            color: "#000000",
                            fontSize: "13px",
                            border: "1px solid #0000004f",
                            height: "25px",
                            "&:hover": {
                              backgroundColor: "#fff",
                              opacity: 1,
                            },
                          }}
                          endIcon={<AddIcon />}
                        >
                          Add Order
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <AddOrder
        open={openAddOrder}
        handleClose={handleCloseAddOrder}
        setNewOrderACtive={setNewOrderACtive}
      />
    </Box>
  );
}
