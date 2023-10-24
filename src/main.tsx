import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import { ThemeProvider } from "@material-tailwind/react";
import {Home} from "@/pages/Home.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);

