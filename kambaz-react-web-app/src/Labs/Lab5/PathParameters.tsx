// import { useState } from 'react';
// import { FormControl, Button } from 'react-bootstrap'; // Assuming you are using React Bootstrap
//
// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
//
// export default function PathParameters() {
//     const [a, setA] = useState("34");
//     const [b, setB] = useState("23");
//     // const [result, setResult] = useState('');
//     const [setResult] = useState('');
//     const handleOperation = (operation: string) => {
//
//         fetch(`${REMOTE_SERVER}/lab5/${operation}/${a}/${b}`)
//             .then(response => response.text())
//             // @ts-ignore
//             .then(text => setResult(text))
//             .catch(err => console.error('Failed to fetch:', err));
//     };
//
//     return (
//         <div>
//             <h3>Path Parameters</h3>
//             {/*@ts-ignore*/}
//             <FormControl
//                 className="mb-2"
//                 id="wd-path-parameter-a"
//                 type="number"
//                 value={a}
//                 onChange={(e) => setA(e.target.value)}
//             />
//             {/*@ts-ignore*/}
//             <FormControl
//                 className="mb-2"
//                 id="wd-path-parameter-b"
//                 type="number"
//                 value={b}
//                 onChange={(e) => setB(e.target.value)}
//             />
//             {/*@ts-ignore*/}
//             <Button className="btn-primary me-2" onClick={() => handleOperation('add')}>
//                 Add {a} + {b}
//             </Button>
//             {/*@ts-ignore*/}
//             <Button className="btn-danger" onClick={() => handleOperation('subtract')}>
//                 Subtract {a} - {b}
//             </Button>
//             {/*@ts-ignore*/}
//             {/*<Button className="btn-success me-2" onClick={() => handleOperation('multiply')}>*/}
//             {/*    Multiply {a} * {b}*/}
//             {/*</Button>*/}
//             {/*@ts-ignore*/}
//             {/*<Button className="btn-warning" onClick={() => handleOperation('divide')}>*/}
//             {/*    Divide {a} / {b}*/}
//             {/*</Button>*/}
//             {/*<div>*/}
//             {/*    <strong>Result:</strong> {result}*/}
//             {/*</div>*/}
//             <hr />
//         </div>
//     );
// }
import { useState } from "react";
import {FormControl} from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function PathParameters() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");
    return (
        <div>
            <h3>Path Parameters</h3>
            {/*@ts-ignore*/}
            <FormControl className="mb-2" id="wd-path-parameter-a" type="number" defaultValue={a}
                         onChange={(e) => setA(e.target.value)}/>
            {/*@ts-ignore*/}
            <FormControl className="mb-2" id="wd-path-parameter-b" type="number" defaultValue={b}
                         onChange={(e) => setB(e.target.value)}/>
            <a className="btn btn-primary me-2" id="wd-path-parameter-add"
               href={`${REMOTE_SERVER}/lab5/add/${a}/${b}`}>
                Add {a} + {b}
            </a>
            <a className="btn btn-danger" id="wd-path-parameter-subtract"
               href={`${REMOTE_SERVER}/lab5/subtract/${a}/${b}`}>
                Substract {a} - {b}
            </a>
            <a className="btn btn-success me-2" href={`${REMOTE_SERVER}/lab5/multiply/${a}/${b}`}>
                Multiply {a} * {b}
            </a>
            <a className="btn btn-warning" href={`${REMOTE_SERVER}/lab5/divide/${a}/${b}`}>
                Divide {a} / {b}
            </a>
            <hr />
        </div>
    );
}
