import React from "react";
import {useSelector,useDispatch} from "react-redux";
import { increment ,decrement} from "./counterSlice";
const CounterRedux = ()=>{
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>redux counter :{count}</h2>
            <button onClick={()=>dispatch(increment())}>Tang</button>
            <button onClick={()=>dispatch(decrement())}>Tang</button>
        </div>
    )
}
export default CounterRedux;