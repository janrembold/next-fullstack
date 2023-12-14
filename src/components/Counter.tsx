"use client";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((prev) => prev + 1)}
      style={{ padding: "20px 40px" }}
    >
      Count ({count})
    </button>
  );
};
