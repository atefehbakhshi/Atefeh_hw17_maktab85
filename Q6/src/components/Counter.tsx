import { useState } from 'react'
import './Counter.css'

type VF = () => void;

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0)

    const increaseHandler: VF = () => {
        setCount(count + 1)
    }
    const decreaseHandler: VF = () => {
        setCount(count - 1)
    }

    return (
        <div className='counter'>
            <button className='counter-btn plus' onClick={increaseHandler}>+</button>
            <p className="count">{count}</p>
            <button className='counter-btn minus' onClick={decreaseHandler}>-</button>
        </div>
    )
}

export default Counter