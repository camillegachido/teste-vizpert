import { createContext } from 'react';
import { Shelf } from '../../interfaces';

interface ContextProps {
  shelfs: Shelf[];
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
  move: (fromList: number, toList: number, from: number, to: number) => void;
}

export default createContext({} as ContextProps);
