import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import {theme} from './constants'
import './index.css';
import App from 'components/App';
import { Container } from './components/App/App.styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Container>
      <App />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);
