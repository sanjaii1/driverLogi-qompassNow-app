import React from "react";
import {
  Box,
  Table,
  TableContainer,
  TableHead,
  Typography,
  TableCell,
  Paper,
  TableRow,
  TableBody,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SaveIcon from "@mui/icons-material/Save";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
// import TablePagination from "@mui/material/TablePagination";

export default function OrderOverview({ tableData }) {
  // const page = 0;
  // const rowsPerPage = 10;
  // const rowCount = 100;
  // const handleChangePage = (event, newPage) => {};
  return (
    <Box
      sx={{
        border: "1px solid #5855551f",
        borderRadius: "4px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        margin: "16px auto",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "15px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "17px", fontWeight: 550 }}>
            Order Overview
          </Typography>
        </Box>
        <Box>
          <IconButton
            sx={{
              width: 25,
              height: 25,
              borderRadius: 0,
              mr: 1,
              border: "1px solid #ccc",
              backgroundColor: "#f5f5f5",
              padding: "5px",
            }}
          >
            <SearchIcon sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }} />
          </IconButton>
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
          </IconButton>
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
            <ContentCopyIcon
              sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }}
            />
          </IconButton>
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
            <SaveIcon sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }} />
          </IconButton>
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
            <AttachFileIcon
              sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }}
            />
          </IconButton>
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
            <DeleteOutlineIcon
              sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }}
            />
          </IconButton>
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
            <AutorenewIcon sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }} />
          </IconButton>
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
            <SettingsIcon sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }} />
          </IconButton>
          <IconButton
            sx={{
              width: 25,
              height: 25,
              borderRadius: 0,
              border: "1px solid #ccc",
              backgroundColor: "#f5f5f5",
            }}
          >
            <MoreVertIcon sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }} />
          </IconButton>
        </Box>
      </Box>

      <Box>
        <TableContainer component={Paper} sx={{ minHeight: "200px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#095ef812" }}>
              <TableRow>
                <TableCell
                  sx={{
                    whiteSpace: "nowrap",
                    fontWeight: 550,
                    fontSize: "12px",
                    padding: "5px",
                  }}
                >
                  No
                </TableCell>
                <TableCell
                  sx={{
                    whiteSpace: "nowrap",
                    fontSize: "12px",
                    padding: "5px",
                    fontWeight: 550,
                  }}
                >
                  Invoice no
                </TableCell>
                <TableCell
                  sx={{
                    whiteSpace: "nowrap",
                    fontSize: "12px",
                    padding: "5px",
                    fontWeight: 550,
                  }}
                >
                  Load type
                </TableCell>
                <TableCell
                  sx={{
                    whiteSpace: "nowrap",
                    fontSize: "12px",
                    padding: "5px",
                    fontWeight: 550,
                  }}
                >
                  Load Quantity
                </TableCell>
                <TableCell
                  sx={{
                    whiteSpace: "nowrap",
                    fontSize: "12px",
                    padding: "5px",
                    fontWeight: 550,
                  }}
                >
                  Actual Weight
                </TableCell>
                <TableCell
                  sx={{
                    whiteSpace: "nowrap",

                    fontSize: "12px",
                    padding: "5px",
                    fontWeight: 550,
                  }}
                >
                  Volumetric (cm3)
                </TableCell>
                <TableCell
                  sx={{
                    whiteSpace: "nowrap",
                    fontSize: "12px",
                    padding: "5px",
                    fontWeight: 550,
                  }}
                >
                  Product category
                </TableCell>
                <TableCell
                  sx={{
                    whiteSpace: "nowrap",
                    fontSize: "12px",
                    padding: "5px",
                    fontWeight: 550,
                  }}
                >
                  HAZMAT class
                </TableCell>
                <TableCell
                  sx={{
                    whiteSpace: "nowrap",
                    fontSize: "12px",
                    padding: "5px",
                    fontWeight: 550,
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ padding: "5px" }}>{index + 1}</TableCell>
                  <TableCell sx={{ padding: "5px" }}>
                    <input
                      variant="outlined"
                      style={{
                        height: "20px",
                        border: "1px solid #cccccc",
                        width: "90px",
                      }}
                      defaultValue={row.invoiceNo}
                    />
                  </TableCell>
                  <TableCell sx={{ padding: "5px" }}>
                    <select
                      name="load"
                      id="load"
                      defaultValue={row.loadType}
                      style={{
                        height: "24px",
                        border: "1px solid #cccccc",
                        width: "100px",
                      }}
                    >
                      <option value="Carton">Carton Box</option>
                      <option value="Wooden">Wooden Box</option>
                      <option value="Plastic">Plastic</option>
                      <option value="Other">Other</option>
                    </select>
                  </TableCell>
                  <TableCell sx={{ padding: "5px" }}>
                    <input
                      variant="outlined"
                      size="small"
                      defaultValue={row.loadQuantity}
                      style={{
                        height: "20px",
                        border: "1px solid #cccccc",
                        width: "90px",
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ padding: "5px",display:"flex" }}>
                    <input
                      variant="outlined"
                      size="small"
                      defaultValue={row.actualWeight}
                      style={{
                        height: "20px",
                        border: "1px solid #cccccc",
                        width: "60px",
                      }}
                    />
                    <input
                      variant="outlined"
                      size="small"
                      readOnly
                      value="Kg"
                      style={{
                        height: "20px",
                        border: "1px solid #cccccc",
                        width: "20px",
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ padding: "5px" }}>
                    <Box sx={{ display: "flex" }}>
                      <input
                        variant="outlined"
                        size="small"
                        defaultValue={row.volumetric.L}
                        placeholder="L"
                        style={{
                          height: "20px",
                          border: "1px solid #cccccc",
                          width: "40px",
                        }}
                      />
                      <input
                        variant="outlined"
                        size="small"
                        defaultValue={row.volumetric.B}
                        placeholder="B"
                        style={{
                          height: "20px",
                          border: "1px solid #cccccc",
                          width: "40px",
                        }}
                      />
                      <input
                        variant="outlined"
                        size="small"
                        defaultValue={row.volumetric.H}
                        placeholder="H"
                        style={{
                          height: "20px",
                          border: "1px solid #cccccc",
                          width: "40px",
                        }}
                      />
                    </Box>
                  </TableCell>
                  <TableCell sx={{ padding: "5px" }}>
                    <select
                      name="product"
                      id="product"
                      defaultValue={row.productCategory}
                      style={{
                        height: "24px",
                        border: "1px solid #cccccc",
                        width: "110px",
                      }}
                    >
                      <option value="Consumables">Consumables</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Sports Equipment">Sports Equipment</option>
                      <option value="Clothes Item">Clothes Item</option>
                      <option value="Household Item">Household Item</option>
                      <option value="Other">Other</option>
                    </select>
                  </TableCell>
                  <TableCell sx={{ padding: "5px" }}>
                    <select
                      name="haz"
                      id="haz"
                      defaultValue={row.hazmatClass}
                      style={{
                        height: "24px",
                        border: "1px solid #cccccc",
                        width: "90px",
                      }}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </TableCell>
                  <TableCell sx={{ padding: "5px" }}>
                    <Box sx={{ display: "flex" }}>
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
                        <EditIcon
                          sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }}
                        />
                      </IconButton>{" "}
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
                        <DeleteOutlineIcon
                          sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }}
                        />
                      </IconButton>{" "}
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
                        <AddIcon
                          sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }}
                        />
                      </IconButton>{" "}
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
                        <MoreVertIcon
                          sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }}
                        />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
         
        </TableContainer>
      </Box>

      <Box></Box>
    </Box>
  );
}
