import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Container} from "react-bootstrap";
import ClickEvent from "./ClickEvent.tsx";
import PassingDataOnEvent from "./PassingDataOnEvent.tsx";
import PassingFunctions from "./PassingFunctions.tsx";
import EventObject from "./EventObject.tsx";
import Counter from "./Counter.tsx";
import BooleanStateVariables from "./BooleanStateVariables.tsx";
import StringStateVariables from "./StringStateVariables.tsx";
import DateStateVariable from "./DateStateVariable.tsx";
import ObjectStateVariable from "./ObjectStateVariable.tsx";
import ArrayStateVariable from "./ArrayStateVariable.tsx";
import ParentStateComponent from "./ParentStateComponent.tsx";
import ReduxExamples from "./ReduxExamples";
import HelloRedux from "./ReduxExamples/HelloRedux";
import CounterRedux from "./ReduxExamples/HelloRedux/CounterRedux";
import TodoList from "./ReduxExamples/todos/TodoList.tsx";

export default function Lab4() {
    function sayHello(){
        alert("Hello");
    }
    // @ts-ignore
    return (
        // @ts-ignore

        <Container id="wd-passing-functions">
            <br/> <br/> <h2>Lab 4</h2> <br/><br/>
            {/* @ts-ignore */}
            <Row>
                {/* @ts-ignore */}
                <Col>
                    <ClickEvent/>
                    < PassingDataOnEvent/>
                    <PassingFunctions theFunction={sayHello} />
                    <EventObject/>
                    <Counter/>
                    <BooleanStateVariables/>
                    <StringStateVariables/>
                    <DateStateVariable/>
                    <ObjectStateVariable/>
                    <ArrayStateVariable/>
                    <ParentStateComponent/>
                    <ReduxExamples/>
                    <HelloRedux/>
                    <CounterRedux/>
                    <TodoList/>
                </Col>
            </Row>
        </Container>


    );}