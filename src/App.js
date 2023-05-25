import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Shops from "./pages/Shops";
import Cart from "./pages/Cart";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/shops" />} />
          <Route path="/shops" element={<Shops />} />
          <Route
            path="/shops/:shopsId"
            element={<div>shop details page</div>}
          />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
