import { useReducer, useState } from 'react'
import './App.css'

function App() {
  const initialState ={count:0};
  const reducer = (state,action) =>{
    switch (action.type){
      case 'increase':
        return {count:state.count + 1};
      case 'decrease':
        return {count:state.count - 1};
      default:
        return state;
    }
  };
  const [state,dispatch] = useReducer(reducer,initialState);

  function tang(){
    dispatch({type:'increase'})
  }
  function giam(){
    dispatch({type:'decrease'})
  }
  return (
    <>
      <div>
        
        <button onClick={tang}>Increase</button>
        <br /><span>{state.count}</span> <br />
        <button onClick={giam}>Decrease</button>
      </div>
    </>
  )
}

export default App
