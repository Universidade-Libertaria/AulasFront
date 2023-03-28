import React from "react";

interface NumbersProps {
  numbers: number[];
}

export default function Numbers({ numbers }: NumbersProps) {
  const maxNumber = Math.max(...numbers);

  return (
    <div>
      <ul>
        {numbers.map((num) => (
          <li key={num} style={{ color: num === maxNumber ? "red" : "green" }}>
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
}
