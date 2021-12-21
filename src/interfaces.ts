export interface Book {
  name: string;
  size: number;
  color: string;
  img: string;
}

export interface ShelfPlaces {
  book: Book;
}

export interface Shelf {
  id: number;
  top: number;
  places: ShelfPlaces[];
}
