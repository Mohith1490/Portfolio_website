import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header/>
    <Footer />
  </StrictMode>
);
