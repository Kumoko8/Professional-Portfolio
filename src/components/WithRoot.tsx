import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';

export default function WithRoot<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>,
) {
  function WithRoot(props: P) {
    return (
      <ThemeProvider theme={theme}>
        
        <CssBaseline />
        <div style={{ overflowX: 'hidden' }}>
          {/* Ensure that no horizontal overflow occurs */}
          <Component {...props} />
        </div>
      </ThemeProvider>
    );
  }

  return WithRoot;
}