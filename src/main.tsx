import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {ThemeProvider} from "@material-tailwind/react";
import {Home} from "@/pages/Home";
import {BlockChainProvider} from "@/context/BlockChain";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {BlockDetail} from "@/pages/Block/BlockDetail";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <BlockChainProvider>
                <BrowserRouter>
                    <Routes>
                        <Route
                            element={<Home/>}
                            path="/"
                        />
                        <Route
                            element={<BlockDetail/>}
                            path="/blocks/:blockNumber"
                        />
                    </Routes>
                </BrowserRouter>
            </BlockChainProvider>
        </ThemeProvider>
    </React.StrictMode>
);

