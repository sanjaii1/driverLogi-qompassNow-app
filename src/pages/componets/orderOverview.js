import React from "react";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SaveIcon from '@mui/icons-material/Save';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function OrderOverview() {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "4px",
        // padding: "16px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        margin: "16px auto",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography>Order Management</Typography>
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
              padding:"5px"
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
            <ContentCopyIcon sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }} />
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
            <AttachFileIcon sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }} />
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
            <DeleteOutlineIcon sx={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }} />
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
    </Box>
  );
}
