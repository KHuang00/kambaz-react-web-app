import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../Lab4/ReduxExamples/HelloRedux/CounterRedux/counterReducer.tsx";
import addReducer from "../Lab4/ReduxExamples/AddRedux/addReducer.tsx";
import todoReducer from "../Lab4/ReduxExamples/todos/todoReducer.ts";
const store = configureStore({
    reducer: { helloReducer, counterReducer, addReducer, todoReducer}});
export default store;