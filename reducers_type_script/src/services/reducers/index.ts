import { combineReducers } from "redux"
import operationsReducer from "./operationsReducer";

const reducers = combineReducers({
    operations: operationsReducer
})

export default reducers

export type State = ReturnType<typeof reducers>