import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import styles from "../style";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/icons/logo.png";
import IconButton from "@mui/material/IconButton";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Brightness1Icon from "@mui/icons-material/Brightness1";

export default function Header() {
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Box>
      <Grid container sx={{ ...style.mainHeadGrid, justifyContent: "center" }}>
        <Grid
          item
          xs={12}
          sm={5.5}
          md={6}
          lg={8}
          xl={8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "start" },
          }}
        >
          <Box display="flex" alignItems="center">
            <img
              alt="logo"
              src={Logo}
              style={{ height: "50px", width: "50px", padding: "0px" }}
            />
            <Box
              display="flex"
              flexDirection="column"
              sx={{
                position: "relative",
                top: "8px",
                right: "15px",
                fontFamily: "sans-serif",
              }}
            >
              {" "}
              <Typography
                sx={{ fontSize: "18px", fontWeight: 600, color: "#095EF8" }}
              >
                Qompass
              </Typography>
              <Typography
                sx={{
                  fontSize: "10px",
                  textAlign: "right",
                  color: "#095EF8",
                  fontWeight: 600,
                }}
              >
                Now
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2.5}
          md={2.5}
          lg={1.5}
          xl={1.5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <PhoneInTalkIcon sx={{ color: "#095EF8", fontSize: "16px" }} />
            </IconButton>
            <Typography sx={{ fontSize: "14px", color: "#0000008f" }}>
              917736172777
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3.6}
          md={3.1}
          lg={2.1}
          xl={2.1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <MailOutlineIcon sx={{ color: "#095EF8", fontSize: "16px" }} />
            </IconButton>
            <Typography sx={{ fontSize: "14px", color: "#0000008f" }}>
              Itsupport@Driverlogistics.In
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={0.4}
          md={0.4}
          lg={0.4}
          xl={0.4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton>
            <Brightness1Icon sx={{ color: "#095EF8" }} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          background: "white",
          borderBottom:'1px solid #5855551f',
          justifyContent: "space-between",
          alignItems: "center",
          padding:'5px 20px 5px 20px'
        }}
      >
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <Typography sx={{ fontSize: "14px", color: "#0000008f" }}>
            Order Management System
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{ textAlign: "right" }}
        >
          <Typography sx={{ fontSize: "14px", color: "#0000008f" }}>Welcome guest</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
