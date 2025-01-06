import './App.css'
import {increment,decrement} from "./reducer/CountReducer.tsx";

import {useDispatch, useSelector} from "react-redux";


function App() {

    // Accessing the number from the Redux store
   const number=useSelector((state:{number:number})=>state.number)

    const dispatch=useDispatch()

    return (
        <>
            <h1>Counter:{number}</h1>
            <button className='btn' onClick={()=>dispatch(increment())}>Increment</button>
            <button className="btn" onClick={()=>dispatch(decrement())}>Decrement</button>
        </>
    )
}

export default App
