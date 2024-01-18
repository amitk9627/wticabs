import "./App.css";
import { Routes, Route } from "react-router-dom";
import { TopWti } from "./routes/TopWti";
import { AllPages } from "./container/AllPages";
function App() {
  return (
    <div className=" w-screen">
      <TopWti />
      <AllPages />
    </div>
  );
}

export default App;
