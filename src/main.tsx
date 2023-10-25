import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {ThemeProvider} from "@material-tailwind/react";
import {Home} from "@/pages/Home";
import {BlockChainProvider} from "@/context/BlockChain";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <BlockChainProvider>
                <Home/>
            </BlockChainProvider>
        </ThemeProvider>
    </React.StrictMode>
);

