import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ResponsiveAppBar from './components/Nav';
import myTheme from './styles/Theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Context from './contexts/Context';

const App = () =>{
  return(
    <ThemeProvider theme={myTheme}>
      <Context>
        <CssBaseline />
        <BrowserRouter>
          <ResponsiveAppBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Shop" element={<Shop />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </ThemeProvider>
  );
};

export default App;
