import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import "./styles/global.scss";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
    <Router>
        <App />
    </Router>
);
