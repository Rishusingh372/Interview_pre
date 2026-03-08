import react from 'react';
import { useState } from 'react';
import '../index.css';

const Counter = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    // handle increment
    const handleIncrement = () => {
        setCount(count + 1);
    };

    // handle decrement
    const handleDecrement = () => {
        setCount(count - 1);

    };

    // handle reset    
    const handleReset = () => {
        setCount(initialCount);
    };

    return (
        <div className='counter_card'>

            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>

        </div>
    );
}

export default Counter;