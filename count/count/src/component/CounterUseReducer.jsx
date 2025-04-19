import React from "react";
import { useReducer } from "react";

const initialState = 0;

const reducer = (state,action) =>{
    switch(action.type){
        case "Tang":
            return state +1;
        case "Giam":
            return state -1;
        default:
            return state;
    }
}
const CounterUseReducer = () =>{
    const [count,dispatch] = useReducer(reducer,initialState);
    return(
        <div>
            <h2>useReducer count : {count}</h2>
            <button onClick={()=>dispatch({type :"Tang"})}>Tang</button>
            <button onClick={()=>dispatch({type :"Giam"})}>Giam</button>
        </div>
    )
}
export default CounterUseReducer;