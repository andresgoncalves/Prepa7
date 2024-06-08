import { createContext } from 'react';
import { useContador } from './hooks/contador';

export const NuevoContext = createContext();

export function NuevoContextProvider({ children }) {
  const { count, incrementar } = useContador();

  return (
    <NuevoContext.Provider value={{ count, incrementar }}>
      {children}
    </NuevoContext.Provider>
  );
}
