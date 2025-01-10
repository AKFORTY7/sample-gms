import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddGauge from './components/AddGauge';
import Dashboard from './components/Dashboard';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const App = () => {
  // State to store all gauges
  const [gauges, setGauges] = useState([]);

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Gauge Management System
          </Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/add-gauge">Add Gauge</Button>
          <Button color="inherit" href="/dashboard">Dashboard</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route 
          path="/add-gauge" 
          element={<AddGauge setGauges={setGauges} />} 
        />
        <Route 
          path="/dashboard" 
          element={<Dashboard gauges={gauges} />} 
        />
        <Route 
          path="/" 
          element={<Typography variant="h5" align="center" sx={{ marginTop: 4 }}>Welcome to the Gauge Management System!</Typography>} 
        />
      </Routes>
    </Router>
  );
};

export default App;


