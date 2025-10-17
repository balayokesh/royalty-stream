import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

import mockData from "../data/mockData.json";

function EarningsTable() {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Views</TableCell>
            <TableCell align="right">Revenue ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockData.data.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.title}</TableCell>
              <TableCell align="right">{row.views}</TableCell>
              <TableCell align="right">{row.revenue.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EarningsTable;
