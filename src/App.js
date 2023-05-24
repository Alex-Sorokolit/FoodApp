import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout />
      </header>

      <Routes>
        <Route path="/" element={<div>Welcome page</div>} />
        <Route path="/shops" element={<div>shops page</div>} />
        <Route path="/shops/:shopsId" element={<div>shop page</div>} />
        <Route path="/cart" element={<div>cart page</div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
