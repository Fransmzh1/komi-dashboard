import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { Container } from '@mui/material';

function App() {
  return (
    <>
    <div id='satu' >
      <Topbar />
    </div>
    <div id='dua'>
      <Sidebar />
    </div>
    </>
  );
}

export default App;
