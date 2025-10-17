import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import mockData from "../data/mockData.json";

function SummaryStats() {
  const totalViews = mockData.data.reduce((sum, item) => sum + item.views, 0);
  const totalRevenue = mockData.data.reduce((sum, item) => sum + item.revenue, 0);
  const avgRevenuePerView = totalRevenue / totalViews;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6">Total Views</Typography>
            <Typography variant="h5">{totalViews.toLocaleString()}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6">Total Revenue</Typography>
            <Typography variant="h5">${totalRevenue.toFixed(2)}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6">Avg Revenue / View</Typography>
            <Typography variant="h5">${avgRevenuePerView.toFixed(4)}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SummaryStats;
