import { Routes, Route } from "react-router-dom";
// components
import Advanced from "./Advanced";
import UseStateObject from "./components/useState/UseStateObject";

import classes from "./Advanced.module.css";
const AdvancedApp = () => {
  return (
    <Routes>
      <Route path="/advanced" element={<Advanced />} />
      <Route path="/advanced/usestate" element={<UseStateObject />} />
    </Routes>
  );
};
export default AdvancedApp;
