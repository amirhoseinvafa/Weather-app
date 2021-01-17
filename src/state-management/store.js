import { createStore } from "redux";
import reducers from "./reducer/rootReducer";

const store = createStore(reducers);

export default store;
