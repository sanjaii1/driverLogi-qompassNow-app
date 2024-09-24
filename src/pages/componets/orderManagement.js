import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
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

export default function OrderManagement() {
  const [selectProductCateActive, setSelectProductCateActive] = useState(false);
  const [selectLoadTypeActive, setSelectLoadTypeActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedLoadItem, setSelectedLoadItem] = useState(null);

  const productItem = [
    { name: "Consumables", src: Consumables },
    { name: "Electronics", src: Electronics },
    { name: "Sports equipment", src: Sports },
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
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Typography variant="h6" sx={{ fontWeight: 550 }}>
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
                  "&:hover": {
                    backgroundColor: "#4276ed",
                    opacity: 1,
                  },
                }}
                endIcon={<AddIcon />}
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
                  boxShadow: 1,
                  backgroundColor: "#095ef812",
                }}
              >
                <Grid container>
                  <Grid item xs={12} sm={6} md={6} lg={8} xl={8}>
                    <Typography sx={{ color: "#000000", fontWeight: 550 }}>
                      Product category
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                    <Box
                      sx={{
                        border: "1px solid #00000063",
                        borderRadius: "2px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          flex: 2,
                          padding: "2px",
                          backgroundColor: "#fff",
                          minHeight: "24px",
                        }}
                      ></Typography>

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
                  boxShadow: 3,
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
                            onClick={() => setSelectedItem(item.name)}
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
                  boxShadow: 1,
                  backgroundColor: "#095ef812",
                }}
              >
                <Grid container>
                  <Grid item xs={12} sm={6} md={6} lg={8} xl={8}>
                    <Typography sx={{ color: "#000000", fontWeight: 550 }}>
                      Load type
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                    <Box
                      sx={{
                        border: "1px solid #00000063",
                        borderRadius: "2px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          flex: 2,
                          padding: "2px",
                          backgroundColor: "#fff",
                          minHeight: "24px",
                        }}
                      ></Typography>

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
                  boxShadow: 3,
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
                    <Grid container spacing={1}></Grid>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box
              sx={{
                marginTop: "20px",
                borderRadius: "4px",
                boxShadow: 1,
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#095ef812",
              }}
            >
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

                    <Grid container spacing={1} sx={{ flexGrow: 2 }}>
                      <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                        <input
                          // type="number"
                          placeholder="Length"
                          style={{
                            width: "100%",
                            padding: "5px",
                            border: "1px solid #ccc",
                          }}
                        />
                      </Grid>
                      <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                        <input
                          // type="number"
                          placeholder="Breadth"
                          style={{
                            width: "100%",
                            padding: "5px",
                            border: "1px solid #ccc",
                          }}
                        />
                      </Grid>
                      <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                        <input
                          placeholder="Height"
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

                    <Grid container spacing={1} sx={{ flexGrow: 1 }}>
                      <Grid item xs={8} sm={8} md={8}>
                        <input
                          type="number"
                          placeholder="Weight"
                          style={{
                            width: "100%",
                            padding: "5px",
                            border: "1px solid #ccc",
                          }}
                        />
                      </Grid>
                      <Grid item xs={4} sm={4} md={4}>
                        <input
                          type="number"
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

                    <input
                      type="number"
                      placeholder="00000000"
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
                  sx={{ ml: "auto", textAlign: "right" }}
                >
                  <Button>add order</Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
