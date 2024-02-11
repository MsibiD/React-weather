import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Search from "./Search";
import "./Search.css";
import Weather from "./Weather";
import "./Weather.css";
import Footer from "./Footer";
import "./Footer.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Search />
    <Weather />
    <Footer />
  </StrictMode>
);
