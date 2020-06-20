import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
function App() {
  let [count,setcount]=useState(0);
  let [message,setmessage]=useState('');
  const countNum = () => {
    if(count >= 10){
      setmessage('Number is greater than 10...')
      setcount(0)
    }
    else {
      setcount(count+1)
    }
  }
  return (
    <div className="App">
      <h1 className="display-4">Counting App for users</h1>
        <h1>{count}</h1>
        <h3>{message}</h3>
        <Button color="success" onClick={countNum} >click</Button>
        <p>Developed by : Mohsin Ali</p>
    </div>
  );
}

export default App;
