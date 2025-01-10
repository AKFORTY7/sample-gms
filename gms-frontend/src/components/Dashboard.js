import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const Dashboard = ({ gauges }) => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom align="center">
        Dashboard: All Gauges
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>GageList ID</strong></TableCell>
              <TableCell><strong>Serial No</strong></TableCell>
              <TableCell><strong>Control No</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Type</strong></TableCell>
              <TableCell><strong>Manufacturer</strong></TableCell>
              <TableCell><strong>Location</strong></TableCell>
              <TableCell><strong>Next Calibration Due</strong></TableCell>
              <TableCell><strong>Asset No</strong></TableCell>
              <TableCell><strong>Created Date</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gauges.map((gauge, index) => (
              <TableRow key={index}>
                <TableCell>{gauge.gageListID}</TableCell>
                <TableCell>{gauge.serialNo}</TableCell>
                <TableCell>{gauge.controlNo}</TableCell>
                <TableCell>{gauge.status}</TableCell>
                <TableCell>{gauge.type}</TableCell>
                <TableCell>{gauge.manufacturer}</TableCell>
                <TableCell>{gauge.location}</TableCell>
                <TableCell>{gauge.nextCalibrationDue}</TableCell>
                <TableCell>{gauge.assetNo}</TableCell>
                <TableCell>{gauge.createdDate}</TableCell>
                <TableCell>
                  {/* Here you can add action buttons like edit or delete */}
                  <button>Edit</button> <button>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Dashboard;
