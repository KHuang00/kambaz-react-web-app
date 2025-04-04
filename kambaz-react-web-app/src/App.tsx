// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Kambaz from "./Kambaz";
import Labs from './Labs/index'
// import { HashRouter } from "react-router-dom";
import { HashRouter, Route, Routes, Navigate} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Kambaz/store.ts";

function App() {
    // const [count, setCount] = useState(0)

    return (

        <HashRouter>
            <Provider store={store}>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="Labs" />} />
                    <Route path="/Labs/*" element={<Labs />} />
                    <Route path="/Kambaz/*" element={<Kambaz />} />
                </Routes>
            </div>
            </Provider>
        </HashRouter>

    );
}

export default App