import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton';
import ResetButton from './ResetButton';

export default function Counter(){
    const [count, setCount] = useState(0);
    function incrementCounterFunction(by) {
        setCount (count + by)
    }
    function decrementCounterFunction(by){
        
        setCount (count - by);
    }
    function reset(){
        setCount (0);
    }
  
    return(
        <>
             <span className="totalCount">{count}</span>
             <CounterButton by={1} 
                incrementMethod={incrementCounterFunction} 
                decrementMethod={decrementCounterFunction}
             />
             <CounterButton by={2}  
                 incrementMethod={incrementCounterFunction} 
                 decrementMethod={decrementCounterFunction}
             />
             <CounterButton by={5}  
                 incrementMethod={incrementCounterFunction} 
                 decrementMethod={decrementCounterFunction}
             />
             <ResetButton resetMethod={reset} />
        </>
    )
}

