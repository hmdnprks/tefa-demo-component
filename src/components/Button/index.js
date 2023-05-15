import { useState } from 'react';
import styles from './style.module.css';

export default function Button () {
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Klik saya.
      </button>
      <p className={styles.blue}>{counter}</p>
    </div>
  )
}