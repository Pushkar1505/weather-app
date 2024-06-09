import React, { useEffect, useState } from 'react';
import { getWeather } from './services/weatherService';
import WeatherDisplay from './components/WeatherDisplay';
import LocationSelector from './components/LocationSelector';
import { Container, Typography, AppBar, Toolbar, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
}));

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [error, setError] = useState(null);
  const defaultLocation = 'Pune';
  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
       
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = `${latitude},${longitude}`;
          fetchWeather(location);
        },
        () => {
          fetchWeather(defaultLocation);
        }
      );
    } else {
      fetchWeather(defaultLocation);
    }
  };

  const fetchWeather = async (location) => {
       
    try {
      const data = await getWeather(location);
      console.log("data", data);
      setCurrentWeather(data?.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setCurrentWeather(null);
    }
  };

  const handleLocationSelected = (location) => {
       
    fetchWeather(location);
  };

  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6">Weather App</Typography>
        </Toolbar>
      </StyledAppBar>
      <Container>
        <Box mb={4}>
          <StyledPaper>
            <LocationSelector onLocationSelected={handleLocationSelected} />
          </StyledPaper>
        </Box>
        {error && (
          <Box mb={4}>
            <StyledPaper>
              <Typography variant="h6" color="error">{error}</Typography>
            </StyledPaper>
          </Box>
        )}
        <WeatherDisplay weather={currentWeather} />
      </Container>
    </div>
  );
};

export default App;
