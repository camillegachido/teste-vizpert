export interface Book {
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
  places: ShelfPlaces[];
}
