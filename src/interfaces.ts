export interface Book {
  name: string;
  size: number;
  color: string;
  img: string;
}

interface ShelfPlaces {
  book: Book | undefined;
}

export interface Shelf {
  id: number;
  top: number;
  places: ShelfPlaces[];
}
