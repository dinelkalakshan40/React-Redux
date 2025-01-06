import './App.css'
import {increment,decrement} from "./reducer/CountSlice.ts";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/Store.ts";


function App() {

    const number = useSelector((state: RootState) => state.counter.number);
    const dispatch =useDispatch();

    return (
        <div>
            <h1>Counter: {number}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default App
