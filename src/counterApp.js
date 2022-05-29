import { useReducer} from 'react';   

const type = {
    increment: 'increment',
    decrement: 'decrement',
    reset: 'reset'
}

const initialState = 10;

//hace que el estado inicial tenga una mutación
const init = (value) => {

    return value+1


}

const counterReducer = (state, action) => {
    
    switch(action.type) {

        case "increment":
            return state+1;

        case "decrement":
            return state-1;

        case "reset":
            return init(initialState);

        default: 
           return state
    }


}

 const CounterApp = () => {

 const [counter, counterDispatch] = useReducer(counterReducer, initialState, init)


  return (

    <div>
        
        <h1>Clicks: {counter}</h1>
        <button onClick={() => counterDispatch({
            type: type.increment
            })}>
            Increment
        </button>
        <button onClick={() => counterDispatch({
             type: type.decrement
             })}>
            Decrement
        </button>
        <button onClick={() => counterDispatch({ 
            type: type.reset
            })}>
            Reset
        </button>

    </div>

  )
}


export default CounterApp;
