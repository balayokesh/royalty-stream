import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar
} from "@mui/material";

// Hardcoded data for prototype
const appName = "Royalty Stream";
const username = "John Doe";
const profilePic ="https://mui.com/static/images/avatar/1.jpg";

// Formatters for currency and numbers with locale support
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});
const numberFormatter = new Intl.NumberFormat("en-US");

function DashboardHeader() {
  return (
    <AppBar
      id="dashboard-header"
      position="static"
      color="default"
      elevation={2}
      sx={{ padding: 2, backgroundColor: "#fafafa" }}
    >
      <Toolbar sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
        
        {/* Left Section: Branding */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: "#1976d2" }}
          >
            {appName}
          </Typography>
        </Box>

        {/* Right Section: User Info */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar alt={username} src={profilePic} />
          <Typography variant="subtitle1">Welcome, {username}</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default DashboardHeader;
