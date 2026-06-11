import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Data/pages/home";
//port Pokemon from "./Data/pages/pokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon--react/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;