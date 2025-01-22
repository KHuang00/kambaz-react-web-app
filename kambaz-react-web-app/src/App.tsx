// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Kambaz from "./Kambaz";
import Labs from './Labs/index'
// import { HashRouter } from "react-router-dom";
import { HashRouter, Route, Routes, Navigate} from "react-router-dom";
function App() {
  // const [count, setCount] = useState(0)

  return (

    // <>
    //   {/*<div>*/}
    //   {/*  <a href="https://vite.dev" target="_blank">*/}
    //   {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
    //   {/*  </a>*/}
    //   {/*  <a href="https://react.dev" target="_blank">*/}
    //   {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
    //   {/*  </a>*/}
    //   {/*</div>*/}
    //   {/*<h1>Vite + React</h1>*/}
    //   {/*<div className="card">*/}
    //   {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
    //   {/*    count is {count}*/}
    //   {/*  </button>*/}
    //     <p>
    //         {/*<h1> Welcome to Web Dev</h1>*/}
    //       {/*Edit <code>src/App.tsx</code> and save to test HMR*/}
    //         <Labs />
    //     </p>
    //   {/*</div>*/}
    //   {/*<p className="read-the-docs">*/}
    //   {/*  Click on the Vite and React logos to learn more*/}
    //   {/*</p>*/}
    //
    // </>
    // Hash router
    //   <HashRouter>
    //       <div>
    //           <Labs />
    //       </div>
    //   </HashRouter>

      <HashRouter>
          <div>
              <Routes>
                  <Route path="/" element={<Navigate to="Kambaz" />} />
                  <Route path="/Labs/*" element={<Labs />} />
                  <Route path="/Kambaz/*" element={<Kambaz />} />
              </Routes>
          </div>
      </HashRouter>

  );
}

export default App
