import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './App.css';
import { Grid } from '@mui/material';

import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ margin: 0 }}>Countdown Timer</p>
        <h1
          style={{
            color: "#61dafb",
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

      </div>
    </div>
  );
}

export default App;
