import { createContext } from 'react';

interface ContextProps {
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
  move: (fromList: number, toList: number, from: number, to: number) => void;
}

export default createContext({} as ContextProps);
