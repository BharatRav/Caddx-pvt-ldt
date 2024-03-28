import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import { RoutingConfig } from "./configs/RoutingConfig.jsx";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RoutingConfig.map((route, idx) => {
          return (
            <Route
              key={idx}
              path={route.path}
              element={
                <Layout>
                  <route.component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
