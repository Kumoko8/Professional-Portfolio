import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme'; // Import your custom theme


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Grid container>
        <Grid item xs={12}>
        </Grid>
      </Grid>
      <main className="mx-3">
        <Outlet />
      </main>
    </div>
    </ThemeProvider>
  );
}



export default App;
