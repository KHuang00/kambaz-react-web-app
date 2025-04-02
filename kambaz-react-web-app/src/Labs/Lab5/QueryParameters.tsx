import { useState } from 'react';
import {FormControl} from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;


export default function queryParameters() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");

    return (
        <div>
            <h3>Calculator Operations</h3>
            {/*@ts-ignore*/}
            <FormControl className="mb-2" type="number" value={a} onChange={(e) => setA(e.target.value)} />
            {/*@ts-ignore*/}
            <FormControl className="mb-2" type="number" value={b} onChange={(e) => setB(e.target.value)} />
            <a className="btn btn-primary me-2" href={`${REMOTE_SERVER}/lab5/add/${a}/${b}`}>Add {a} + {b}</a>
            <a className="btn btn-danger me-2" href={`${REMOTE_SERVER}/lab5/subtract/${a}/${b}`}>Subtract {a} - {b}</a>
            <a className="btn btn-success me-2" href={`${REMOTE_SERVER}/lab5/multiply/${a}/${b}`}>Multiply {a} * {b}</a>
            <a className="btn btn-warning" href={`${REMOTE_SERVER}/lab5/divide/${a}/${b}`}>Divide {a} / {b}</a>
        </div>
    );
}
