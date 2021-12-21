import React, { useEffect, useRef, useContext } from 'react';

import BookcaseContext from '../Bookcase/context';

import { Book } from '../../interfaces';
import { Book as CardBook, Empty } from '../../styles/bookcase';

import { useDrag, useDrop } from 'react-dnd';

interface BookProps {
  book: Book | undefined;
  index: number;
  listInd: number;
}

const BookComponent: React.FC<BookProps> = ({ book, index, listInd }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { move, setIsDragging } = useContext(BookcaseContext);

  const [{ dragging }, drag] = useDrag({
    type: 'book',
    item: () => {
      return { name: book?.name, index, listInd };
    },
    collect: (monitor: any) => ({
      dragging: monitor.isDragging(),
    }),
  });

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
      }
    },
  });

  useEffect(() => {
    setIsDragging(dragging);
  }, [dragging]);

  drag(drop(ref));

  return (
    <>
      {book ? (
        <CardBook key={book.name} img={book.img} ref={ref} />
      ) : (
        <Empty ref={ref} />
      )}
    </>
  );
};

export default BookComponent;
