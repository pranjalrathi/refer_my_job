'use client'
import React, { useState } from 'react';
import { TextField, OutlinedInput, Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';

const City = () => {
  const [city, setCity] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleCityChange = (event) => {
    setCity(event.target.value);
    setShowDetails(event.target.value.length > 0);
  };

  return (
    <div style={{ margin: '20px' }}>
      <FormControl variant="outlined">
        <OutlinedInput
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city name"
          label="City"
        />
        <FormHelperText>Type a city name to see details</FormHelperText>
      </FormControl>

      {showDetails && (
        <div style={{ marginTop: '20px' }}>
          <FormControlLabel
            control={<Checkbox name="checkedCity" />}
            label={`${city}, State, Country`}
          />
        </div>
      )}
    </div>
  );
};

export default City;
