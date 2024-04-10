import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { RoutingConfig } from "./configs/RoutingConfig.jsx";
import Layout from "./Layout/Layout";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import ThemeConfigs from "./configs/ThemeConfig.jsx";

function App() {
  const { themeMode } = useSelector((state) => state.themeMode);
  return (
    <ThemeProvider theme={ThemeConfigs.custom({ mode: themeMode })}>
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
    </ThemeProvider>
  );
}

export default App;
