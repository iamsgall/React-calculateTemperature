import React from 'react';

export default function TemperatureInput(props) {
  const scale = props.scale;
  const temperature = props.temperature;

  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
  };

  const handleChange = e => {
    props.onTemperatureChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input type='text' value={temperature} onChange={handleChange} />
    </fieldset>
  );
}
