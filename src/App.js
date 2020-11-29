import React, { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Main from './components/Main/Main';
import './App.css';

const theme = createMuiTheme({
  colors: {
    primary: 'white',
    secondary: '#76b833',
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: 36,
        marginTop: 15,
        marginBottom: 15,
      },
    },
    MuiAppBar: {
      root: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      colorPrimary: {},
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
  },
});

const callApi = async () => {
  const response = await fetch('/api/hello');
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};

function App() {
  const [apiReady, setApiReady] = useState(false);

  useEffect(() => {
    callApi()
      .then(res => setApiReady({ response: res.express }))
      .catch(err => console.log(err));
  }, []);

  console.log(apiReady.response);

  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
