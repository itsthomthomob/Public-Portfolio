import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import './App.css';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Experience from '../Pages/Experience';
import Contact from '../Pages/Contact';

// Theme imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField'

const theme = createTheme({
  contactButton: {
    main: '#e53e3e',
  },
  palette: {
    primary: {
      background: {
        default: "#0A0A0A"
      },
      light: '#0A0A0A',
      main: '#0A0A0A',
      dark: '#0A0A0A',
      contrastText: '#F0EFF4'
    }
  }
});


theme.typography.h1 = {
  fontWeight: '300',
  fontSize: '64px',
  color: '#F0EFF4',
  '@media (min-width:600px)': {
    fontSize: '48px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '48px',
  },
};

theme.typography.h2 = {
  fontWeight: '300',
  fontSize: '48px',
  color: '#F0EFF4',
  '@media (min-width:600px)': {
    fontSize: '48px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '48px',
  },
};

theme.typography.h3 = {
  fontWeight: '300',
  fontSize: '36px',
  color: '#F0EFF4',
  '@media (min-width:600px)': {
    fontSize: '48px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '48px',
  },
};

theme.typography.h4 = {
  fontWeight: '300',
  fontSize: '24px',
  color: '#F0EFF4',
  '@media (min-width:600px)': {
    fontSize: '48px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '48px',
  },
};

theme.typography.h5 = 
{
  fontWeight: '200',
  fontSize: '12px',
  color: '#F0EFF4',
  '@media (min-width:600px)': {
    fontSize: '24px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
};

theme.typography.h6 = {
  fontWeight: '200',
  fontSize: '12px',
  color: '#F0EFF4',
  '@media (min-width:600px)': {
    fontSize: '18px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '18px',
  },
};

theme.typography.p = {
  fontWeight: '100',
  fontSize: '10px',
  color: '#F0EFF4',
  '@media (min-width:600px)': {
    fontSize: '12px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '18px',
  },
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/Projects' element={< Projects />}></Route>
            <Route exact path='/Experience' element={< Experience />}></Route>
            <Route exact path='/Contact' element={< Contact />}></Route>
            {/* <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/news' element={< News />}></Route>
            <Route exact path='/ProfilePage' element={< ProfilePage />}></Route> */}
          </Routes>

        </Router>
      </ThemeProvider>
  );
  }
}

export default App;
