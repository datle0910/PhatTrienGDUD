import React from "react";
import { useState } from "react";

const CounterUseState = function(){
    const [count,setCount] = useState(0)
    return (
        <div>
            <h2>UseState count :{count}</h2>
            <button onClick={() => setCount(count -1)}>Giam</button>
            <button onClick={() => setCount(count +1)}>Tang</button>
        </div>
    )
}
export default CounterUseState;