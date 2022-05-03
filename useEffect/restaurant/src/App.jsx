import './App.css';
import { useEffect, useState } from 'react';
import { Todos } from './components/todo';

function App() {

  const [show,setShow] = useState(true);
  
  
  return (
    <div className="App">
      {show? <Todos /> : null}

      <button onClick={()=>{setShow(!show)}}
      >{show? "Hide":"Show"} Todos</button>
    </div>
  );
}

export default App;
