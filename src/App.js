import './App.css';
import Example from './tests/sx';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import { Container } from '@mui/material';
import { Component } from 'react';
import KomiStatus from './pages/KomiStatus';

function App() {
  return (
    <>
      <Topbar />
      <KomiStatus />
    </>
  );
}

export default App;
