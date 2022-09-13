import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home/Home';
import FormAllData from './Component/FormAllData/FormAllData';
import ErrorPage from './Component/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-data" element={<FormAllData />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
