export interface Book {
  id: string;
  name: string;
  size: number;
  color: number;
  img: string;
}

export interface ShelfPlaces {
  book: Book | undefined;
}

export interface Shelf {
  id: number;
  top: number;
  smallTop: number;
  places: ShelfPlaces[];
}

export enum EColors {
  Vermelho = 1,
  Laranja = 2,
  Amarelo = 3,
  Verde = 4,
  AzulClaro = 5,
  AzulEscuro = 6,
  Violeta = 7,
  Rosa = 8,
  RosaEscuro = 9,
}

export interface ModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
