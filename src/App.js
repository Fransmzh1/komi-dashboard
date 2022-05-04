import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { Container } from '@mui/material';

function App() {
  return (
    <div>
        <Topbar pageTitle='Hal' /> 
        <Topbar pageTitle='Hei' /> 
        {/* <Container> */}
          {/* <Sidebar /> */}
        {/* </Container>  */}
    </div>
  );
}

export default App;
