import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const LocationSelector = ({ onLocationSelected }) => {
  const [location, setLocation] = useState('');

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleButtonClick = () => {
    onLocationSelected(location);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={2}>
      <TextField
        label="Enter a location"
        variant="outlined"
        value={location}
        onChange={handleInputChange}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Get Weather
      </Button>
    </Box>
  );
};

export default LocationSelector;
