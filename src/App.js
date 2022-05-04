import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { Box, Container } from '@mui/material';

function App() {
  return (
    <div>
        <Topbar /> 
        <Container>
          <Sidebar />
        </Container> 
    </div>
  );
}

export default App;
