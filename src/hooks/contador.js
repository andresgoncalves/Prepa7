import { useEffect, useState } from 'react';

export function useContador() {
  const [count, setCount] = useState(0);

  function incrementar() {
    setCount((count) => count + 1);
  }

  useEffect(() => {
    if (count > 10) {
      alert('Te pasaste');
    }
  }, [count]);

  return { count, incrementar };
}
