import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ResponsiveAppBar from './components/Nav';

const App = () =>{
  return(   
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
