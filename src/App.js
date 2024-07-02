import React, { useState } from "react";
import "./App.css";

const WaterDischargeCalculator = () => {
  const [upperStream, setUpperStream] = useState("");
  const [gateOpening, setGateOpening] = useState("");
  const [discharge, setDischarge] = useState(null);
  const craftLevel = 10.11;

  const calculateDischarge = () => {
    const h2 = upperStream - craftLevel;
    const h1 = h2 - gateOpening;
    const c = Math.sqrt(h2) * h2;
    const d = Math.sqrt(h1)* h1;
    const e = d - c;
    const dischargeValue = e * 25.67;
    setDischarge(dischargeValue);
  };

  return (
    <div className="form-container">
      <h1>Water Discharge Calculator</h1>
      <div className="input-group">
        <label>Upper Stream Level:</label>
        <input
          type="number"
          value={upperStream}
          onChange={(e) => setUpperStream(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label>Gate Opening:</label>
        <input
          type="number"
          value={gateOpening}
          onChange={(e) => setGateOpening(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calculateDischarge}>Calculate Discharge</button>
      {discharge !== null && (
        <div className="result">
          <h2>Discharge: {discharge.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <WaterDischargeCalculator />
    </div>
  );
};

export default App;
