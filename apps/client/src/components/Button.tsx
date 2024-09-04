import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function Button({ children, variant = 'primary' }: ButtonProps) {
  const [counter, setCounter] = useState(0);

  const className = useMemo(() => {
    console.log('calculated');
    if (variant === 'primary') {
      return 'px-4 py-2 rounded-md bg-red-600 text-white';
    } else {
      return 'px-4 py-2 rounded-md border border-red-500 text-black';
    }
  }, [variant]);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <button className={className} onClick={handleClick}>
      {children} {counter}
    </button>
  );
}
