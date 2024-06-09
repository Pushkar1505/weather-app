import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: 'auto',
  marginTop: theme.spacing(4),
}));

const StyledMediaContainer = styled(Box)({
  height: 200,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  backgroundColor: '#f0f0f0', 
});

const StyledMedia = styled('img')({
  maxHeight: '100%',
  maxWidth: '100%',
  width:'100%',
  height:'100%',
  objectFit: 'contain',
});

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  const { location, current } = weather;

  return (
    <StyledCard>
      <StyledMediaContainer>
        <StyledMedia
          src={current.weather_icons[0]}
          alt={current.weather_descriptions[0]}
        />
      </StyledMediaContainer>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Weather in {location.name}
        </Typography>
        <Box textAlign="center">
          <Typography variant="h6">Temperature: {current.temperature}°C</Typography>
          <Typography variant="h6">Condition: {current.weather_descriptions[0]}</Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default WeatherDisplay;
