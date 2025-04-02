import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import { Route, Routes, Navigate } from "react-router-dom";
import TOC from "./TOC";
import Lab4 from "./Lab4";
import store from "./store";
import { Provider } from "react-redux";
import Lab5 from "./Lab5";

export default function Labs() {
    return (
        <Provider store={store}>
            <div id="wd-labs">
            <h1>Labs</h1>
            <TOC />

            {/*<Routes>*/}
            {/*    <Route path="/" element={<Navigate to="Lab1" />} />*/}
            {/*    <Route path="Lab1" element={<Lab1 />} />*/}
            {/*    <Route path="Lab2" element={<Lab2 />} />*/}
            {/*    <Route path="Lab3" element={<Lab3 />} />*/}
            {/*</Routes>*/}
            {/* Show All Labs When at /Labs */}
            <Routes>
                {/* Navigate to 'All' when accessing '/Labs' */}
                <Route path="/" element={<Navigate to="AllLabs" replace />} />

                {/* New Route to Display All Labs */}
                <Route path="AllLabs/*" element={
                    <div>
                        <Lab1 />
                        <Lab2 />
                        <Lab3 />
                        <Lab4 />
                        <Lab5 />
                    </div>
                } />

                {/* Individual Lab Pages */}
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2" element={<Lab2 />} />
                <Route path="Lab3/*" element={<Lab3 />} />
                <Route path="Lab4/*" element={<Lab4 />} />
                <Route path="Lab5/*" element={<Lab5 />} />
            </Routes>
          </div>
        </Provider>
    );
}
