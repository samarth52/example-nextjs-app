// src/app/hello-world/page.jsx
'use client';  // Enables client-side interactivity
import { useState } from 'react';
import Button from "../../components/Button";

export default function HelloWorld() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hello World!</h1>
      <Button
        onClick={() => setCount(count + 1)}
      >
        Clicked {count} times
      </Button>
    </div>
  );
}