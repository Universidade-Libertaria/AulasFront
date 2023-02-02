import { useState } from "react";
import styles from "./count.module.scss";

interface CountProps {
  num: number;
}

export function Count({ num }: CountProps) {
  const [number, setNumber] = useState(num);

  function handleAdd() {
    setNumber(number + 1);
  }

  function handleSub() {
    setNumber(number - 1);
  }
  return (
    <div className={styles.wrapper}>
      <button onClick={handleAdd}>Add</button>
      <strong>{number}</strong>
      <button onClick={handleSub}>Sub</button>
    </div>
  );
}
