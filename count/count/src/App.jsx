import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterUseState from './component/counterUseState.jsx'
import CounterUseReducer from './component/CounterUseReducer.jsx'
import CounterRedux from './component/CounterRedux.jsx'
// import { store } from './component/store.jsx'
import { Provider } from 'react-redux'
import TodoList from './todolist/TodoList.jsx'
import { store } from './todolist/store.jsx';

function App() {
  return (
    // <Provider store={store}>
    //   <div>
    //     <CounterUseState/>
    //     <CounterUseReducer/>
    //     
    //   </div>
    // </Provider>
    <Provider store={store}>
    <div>
      <TodoList/>
      {/* <CounterRedux/> */}
    </div>
  </Provider>
  )
}

export default App
