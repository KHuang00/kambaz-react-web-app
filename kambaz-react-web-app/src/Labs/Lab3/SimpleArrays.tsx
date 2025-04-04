import "./index.css";

export default function SimpleArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let htmlArray1 = [<li key="1">Buy milk</li>, <li key="2">Feed the pets</li>];
    let variableArray1 = [functionScoped, blockScoped, constant1, numberArray1.join(" "), stringArray1.join(" ")];

    return (
        <div id="wd-simple-arrays">
            <h4>Simple Arrays</h4>
            numberArray1 = {numberArray1.join(" ")} <br />
            stringArray1 = {stringArray1.join(" ")} <br />
            variableArray1 = {variableArray1.join(" ")} <br />
            <br />
            <strong>Todo list:</strong>
            <ol>
                {htmlArray1}
            </ol>
            <hr />
        </div>
    );
}

