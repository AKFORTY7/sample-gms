import React, { useState } from 'react';
import { TextField, Button, Grid, Container, MenuItem, Select, InputLabel, FormControl, FormControlLabel, Checkbox } from '@mui/material';

const AddGauge = ({ setGauges }) => {
  const [gaugeData, setGaugeData] = useState({
    gageListID: '',
    serialNo: '',
    controlNo: '',
    status: '',
    type: '',
    manufacturer: '',
    location: '',
    nextCalibrationDue: '',
    area: '',
    assetNo: '',
    instructions: '',
    testMode: false,
    conditionAcquired: '',
    createdDate: '',
    dateAcquired: '',
    days: '',
    interval: '',
    lastCalibration: '',
    referenceStandard: '',
    model: '',
    months: '',
    otherInformation: '',
    gageCost: '',
    rangeOrSize: '',
    assignee: '',
    sourceVendor: '',
    accuracy: '',
    measurementTypes: '',
    unitsOfMeasure: '',
    manufacturerWebsite: '',
    years: '',
    nistNumber: '',
    notificationList: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGaugeData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGauges((prevGauges) => [...prevGauges, gaugeData]);
    setGaugeData({}); // Clear form after submission
  };

  return (
    <Container maxWidth="md">
      <h2>New Gauge Data</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* GageList ID */}
          <Grid item xs={12}>
            <TextField
              label="GageList ID"
              fullWidth
              name="gageListID"
              value={gaugeData.gageListID}
              onChange={handleChange}
            />
          </Grid>
          
          {/* Serial No */}
          <Grid item xs={12}>
            <TextField
              label="Serial No"
              fullWidth
              name="serialNo"
              value={gaugeData.serialNo}
              onChange={handleChange}
            />
          </Grid>

          {/* Control No */}
          <Grid item xs={12}>
            <TextField
              label="Control No"
              fullWidth
              name="controlNo"
              value={gaugeData.controlNo}
              onChange={handleChange}
            />
          </Grid>

          {/* Status */}
          <Grid item xs={12}>
            <TextField
              label="Status"
              fullWidth
              name="status"
              value={gaugeData.status}
              onChange={handleChange}
            />
          </Grid>

          {/* Type */}
          <Grid item xs={12}>
            <TextField
              label="Type"
              fullWidth
              name="type"
              value={gaugeData.type}
              onChange={handleChange}
            />
          </Grid>

          {/* Manufacturer */}
          <Grid item xs={12}>
            <TextField
              label="Manufacturer"
              fullWidth
              name="manufacturer"
              value={gaugeData.manufacturer}
              onChange={handleChange}
            />
          </Grid>

          {/* Location */}
          <Grid item xs={12}>
            <TextField
              label="Location"
              fullWidth
              name="location"
              value={gaugeData.location}
              onChange={handleChange}
            />
          </Grid>

          {/* Next Calibration Due */}
          <Grid item xs={12}>
            <TextField
              label="Next Calibration Due"
              fullWidth
              name="nextCalibrationDue"
              value={gaugeData.nextCalibrationDue}
              onChange={handleChange}
            />
          </Grid>

          {/* Area */}
          <Grid item xs={12}>
            <TextField
              label="Area"
              fullWidth
              name="area"
              value={gaugeData.area}
              onChange={handleChange}
            />
          </Grid>

          {/* Asset No */}
          <Grid item xs={12}>
            <TextField
              label="Asset No"
              fullWidth
              name="assetNo"
              value={gaugeData.assetNo}
              onChange={handleChange}
            />
          </Grid>

          {/* Instructions */}
          <Grid item xs={12}>
            <TextField
              label="Instructions"
              fullWidth
              name="instructions"
              value={gaugeData.instructions}
              onChange={handleChange}
            />
          </Grid>

          {/* Test Mode */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gaugeData.testMode}
                  onChange={handleChange}
                  name="testMode"
                />
              }
              label="Test Mode"
            />
          </Grid>

          {/* Condition Acquired */}
          <Grid item xs={12}>
            <TextField
              label="Condition Acquired"
              fullWidth
              name="conditionAcquired"
              value={gaugeData.conditionAcquired}
              onChange={handleChange}
            />
          </Grid>

          {/* Created Date */}
          <Grid item xs={12}>
            <TextField
              label="Created Date"
              fullWidth
              name="createdDate"
              type="date"
              value={gaugeData.createdDate}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          {/* Date Acquired */}
          <Grid item xs={12}>
            <TextField
              label="Date Acquired"
              fullWidth
              name="dateAcquired"
              type="date"
              value={gaugeData.dateAcquired}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          {/* Other fields... (same structure for all other fields) */}

          {/* Gage Cost */}
          <Grid item xs={12}>
            <TextField
              label="Gage Cost"
              fullWidth
              name="gageCost"
              value={gaugeData.gageCost}
              onChange={handleChange}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Add Gauge
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddGauge;
