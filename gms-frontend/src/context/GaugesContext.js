import React, { createContext, useState, useContext } from 'react';

// Create a context for gauges
const GaugesContext = createContext();

// Custom hook to use the GaugesContext
export const useGauges = () => {
  return useContext(GaugesContext);
};

// Provider component to wrap the app and provide the context
export const GaugesProvider = ({ children }) => {
  const [gauges, setGauges] = useState([]);

  const addGauge = (gauge) => {
    setGauges((prevGauges) => [...prevGauges, gauge]);
  };

  return (
    <GaugesContext.Provider value={{ gauges, addGauge }}>
      {children}
    </GaugesContext.Provider>
  );
};
