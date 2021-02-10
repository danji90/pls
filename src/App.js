import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Main from './components/Main/Main';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(254, 196, 79)',
    },
    secondary: {
      main: '#f55',
    },
  },
  colors: {
    primary: 'rgb(254, 196, 79)',
    secondary: '#f55',
  },
  typography: {
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: 36,
        marginTop: 15,
        marginBottom: 15,
        fontWeight: '500px',
      },
      h2: {
        fontSize: 28,
        marginTop: 12,
        marginBottom: 12,
        fontWeight: '500px',
      },
    },
    MuiCardContent: {
      root: {
        height: 120,
      },
    },
    MuiList: {
      root: {
        fontSize: 16,
      },
    },
    MuiAppBar: {
      root: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
    },
    MuiTabs: {
      root: {
        height: '100%',
      },
      flexContainer: {
        height: '100%',
      },
    },
    MuiTab: {
      root: {
        textTransform: 'unset',
      },
    },
    MuiBox: {
      root: {
        padding: 20,
      },
    },
    MuiButton: {
      root: {
        textTransform: 'unset',
        '&:hover': {
          backgroundColor: 'auto',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
