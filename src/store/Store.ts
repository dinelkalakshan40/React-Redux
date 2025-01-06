import {createStore} from "redux";
import reducer from "../reducer/CountReducer.tsx";


const store = createStore(reducer);

export default store;