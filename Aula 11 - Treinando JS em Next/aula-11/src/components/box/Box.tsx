import React, { useState } from "react";

export default function Box() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <strong style={{ color: isChecked ? "green" : "red" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae,
        similique!
      </strong>
    </div>
  );
}
