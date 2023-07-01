"use client";

import styles from './page.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux_files/features/counter/counterSlice';


export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  return (
    <main className={styles.main}>
      <div>
        <h1>Counter app</h1>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>

          <button
            aria-label="Decrement value"
            onClick={() => dispatch(incrementByAmount(50))}
          >
            Counter By Amount
          </button>
        </div>

      </div>
    </main>
  )
}
