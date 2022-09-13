import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home/Home';
import FormAllData from './Component/FormAllData/FormAllData';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-data" element={<FormAllData />} />
      </Routes>
    </div>
  );
}

export default App;
