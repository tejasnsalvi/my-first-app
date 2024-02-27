import logo from './logo.svg';
import './App.css';
import About from './screens/About';
import Register from './screens/Register';
import UserList from './screens/UserList';
import React from 'react'
import ReactDOM from 'react-dom'
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './actions';

function App() {

  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={()=>dispatch(increment(5))}>+</button>
    </div>
  );
}

export default App;

// ./ current dir
// ../ one level abv dir 
