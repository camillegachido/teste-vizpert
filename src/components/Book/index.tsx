import React, { useEffect } from 'react';

import { Book } from '../../interfaces';
import { Book as CardBook, Empty } from '../../styles/bookcase';

import { useDrag } from 'react-dnd';

interface BookProps {
  book: Book | undefined;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookComponent: React.FC<BookProps> = ({ book, setIsDragging }) => {
  const [{ dragging }, drag] = useDrag({
    type: 'book',
    //  item: () => {
    //    return { id, index };
    //  },
    collect: (monitor: any) => ({
      dragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    setIsDragging(dragging);
  }, [dragging]);

  return (
    <>
      {book ? (
        <CardBook key={book.name} img={book.img} ref={drag} />
      ) : (
        <Empty ref={drag} />
      )}
    </>
  );
};

export default BookComponent;
