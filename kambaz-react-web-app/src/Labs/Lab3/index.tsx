import VariablesAndConstants from "./VariablesAndConstants.tsx";
import VariableTypes from "./VariableTypes.tsx";
import BooleanVariables from "./BooleanVariables.tsx";
import IfElse from "./IfElse.tsx";
import TernaryOperator from "./TernaryOperator.tsx";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse.tsx";
import ConditionalOutputInline from "./ConditionalOutputInline.tsx";
import LegacyFunctions from "./LegacyFunctions.tsx";
import ArrowFunctions from "./ArrowFunctions.tsx";
import ImpliedReturn from "./ImpliedReturn.tsx";
import TemplateLiterals from "./TemplateLiterals.tsx";
import SimpleArrays from "./SimpleArrays.tsx";
import ArrayIndexAndLength from "./ArrayIndexAndLength.tsx";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays.tsx";
import ForLoops from "./ForLoops.tsx";
import MapFunction from "./MapFunction.tsx";
import FindFunction from "./FindFunction.tsx";
import FindIndex from "./FindIndex.tsx";
import FilterFunction from "./FilterFunction.tsx";
import JsonStringify from "./JsonStringify.tsx";
import House from "./House.tsx";
import TodoList from "./todos/TodoList.tsx";
import Spreading from "./Spreading.tsx";
import Destructing from "./Destructing.tsx";
import FunctionDestructing from "./FunctionDestructing.tsx";
import DestructingImports from "./DestructingImports.tsx";
import Classes from "./Classes.tsx";
import Styles from "./Styles.tsx";
import Add from "./Add.tsx";
import Square from "./Square.tsx";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters.tsx";
import { useSelector } from "react-redux";
import {ListGroup} from "react-bootstrap";

export default function Lab3() {

   // @ts-ignore
   const { todos } = useSelector((state: any) => state.todoReducer);


        return (
        <div id="wd-lab3">
            <h3>Lab 3</h3>
                {/*@ts-ignore*/}
                <ListGroup>
                        {todos.map((todo: any) => (
                            // @ts-ignore
                            <ListGroup.Item key={todo.id}>
                                    {todo.title}
                            </ListGroup.Item>
                        ))}
                </ListGroup>
                <hr />
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            <IfElse/>
            <TernaryOperator/>
            <ConditionalOutputIfElse />
            <ConditionalOutputInline />
            <LegacyFunctions />
            <ArrowFunctions/>
            <ImpliedReturn/>
            <TemplateLiterals/>
            <SimpleArrays/>
            <ArrayIndexAndLength/>
            <AddingAndRemovingToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
            <JsonStringify/>
            <House/>
            <TodoList/>
            <Spreading/>
            <Destructing/>
            <FunctionDestructing/>
            <DestructingImports/>
            <Classes/>
            <Styles/>
            <Add a={3} b={4} />
            <h4>Square of 4</h4>
            <Square>4</Square>
            <hr />
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <PathParameters/>


        </div>
    );
}
