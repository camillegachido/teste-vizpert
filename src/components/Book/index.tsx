import React, { useEffect, useRef, useContext } from 'react';

import { ShelfContext } from '../../context/shelf';

import { Book } from '../../interfaces';
import { Book as CardBook, Empty } from '../../styles/bookcase';

import { useDrag, useDrop } from 'react-dnd';

interface BookProps {
  book: Book | undefined;
  index: number;
  listInd: number;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookComponent: React.FC<BookProps> = ({
  book,
  index,
  listInd,
  setIsDragging,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { move, setBook } = useContext(ShelfContext);

  const [{ dragging }, drag] = useDrag(
    {
      type: 'book',
      item: () => {
        return { name: book?.name, index, listInd };
      },
      collect: (monitor: any) => ({
        dragging: monitor.isDragging(),
      }),
    },
    [book, index, listInd],
  );

  const [, drop] = useDrop({
    accept: 'book',
    hover: (item: any, monitor: any) => {
      //item => qual card esta sendo arastado
      //book, ind, listInd => card que recebe o arrastamento

      const draggedInd = item.index;
      const targetInd = index;

      const draggedListInd = item.listInd;
      const targetListInd = listInd;

      if (draggedInd == targetInd && targetListInd == draggedListInd) return;

      const targetSize = ref.current?.getBoundingClientRect();
      if (targetSize) {
        const targetHorizontalCenter = (targetSize.right - targetSize.left) / 2;
        const targetVerticalCenter = (targetSize.bottom - targetSize.top) / 2;

        const draggedOffset = monitor.getClientOffset();

        const draggedLeft = draggedOffset.left - targetSize.left;
        const draggedTop = draggedOffset.top - targetSize.top;

        if (
          draggedInd < targetInd &&
          (draggedLeft < targetHorizontalCenter ||
            draggedTop < targetVerticalCenter)
        )
          return;
        if (
          draggedInd > targetInd &&
          (draggedLeft > targetHorizontalCenter ||
            draggedTop > targetVerticalCenter)
        )
          return;

        move(draggedListInd, targetListInd, draggedInd, targetInd);

        item.index = targetInd;
        item.listInd = targetListInd;
      }
    },
  });

  useEffect(() => {
    setIsDragging(dragging);
  }, [dragging]);

  book ? drag(drop(ref)) : drop(ref);
  return (
    <>
      {book ? (
        <CardBook
          key={book.name}
          img={book.img}
          ref={ref}
          onClick={() => setBook(book)}
          id={book.id}
        />
      ) : (
        <Empty ref={ref} />
      )}
    </>
  );
};

export default BookComponent;
