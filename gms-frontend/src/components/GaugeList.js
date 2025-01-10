import React from 'react';

const GaugeList = ({ gauges }) => {
  return (
    <div className="gauge-list">
      <h3>Gauge List</h3>
      {gauges.length === 0 ? (
        <p>No gauges added yet.</p>
      ) : (
        <ul>
          {gauges.map((gauge, index) => (
            <li key={index}>
              <strong>{gauge.name}</strong> - {gauge.status} - Calibration Date: {gauge.calibrationDate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GaugeList;
