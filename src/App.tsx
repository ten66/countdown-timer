import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './App.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@mui/material/styles";
import theme from './styles';

import logo from './logo.svg';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ margin: 0 }}>Countdown Timer</p>
          <h1
            style={{
              color: theme.palette.primary.main,
              margin: 30,
            }}
          >
            00 : 00 : 00
          </h1>
          <Grid
            container
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <TextField
              id="outlined-number"
              label="Hours"
              type="number"
              variant="outlined"
              size="small"
              sx={{ width: "5rem" }}
              InputLabelProps={{ shrink: true }}
              InputProps={{ inputProps: {
                inputMode: "numeric",
                pattern: "[0-9]*",
                min: 0,
                max: 5,
              }}}
            />
            <Box sx={{ p: 1 }}>:</Box>
            <TextField
              id="outlined-number"
              label="Minutes"
              type="number"
              variant="outlined"
              size="small"
              sx={{ width: "5rem" }}
              InputLabelProps={{ shrink: true }}
              InputProps={{ inputProps: {
                inputMode: "numeric",
                pattern: "[0-9]*",
                min: 0,
                max: 59,
              }}}
            />
            <Box sx={{ p: 1 }}>:</Box>
            <TextField
              id="outlined-number"
              label="Seconds"
              type="number"
              variant="outlined"
              size="small"
              sx={{ width: "5rem" }}
              InputLabelProps={{ shrink: true }}
              InputProps={{ inputProps: {
                inputMode: "numeric",
                pattern: "[0-9]*",
                min: 0,
                max: 59,
                color: "white"
              }}}
            />
          </Grid>
          <Grid
            container
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              p: 2,
            }}
          >
            <Box sx={{ p: 2 }}>
              <Button>
                RESET
              </Button>
            </Box>
            <Box sx={{ p: 2 }}>
              <Button>
                STOP
              </Button>
            </Box>
            <Box sx={{ p: 2 }}>
              <Button>
                START
              </Button>
            </Box>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
