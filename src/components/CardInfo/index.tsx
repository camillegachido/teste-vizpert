import React, { useContext, useEffect, useState } from 'react';

import { CardInfos } from '../../styles/bookcase';
import { ShelfContext } from '../../context/shelf';

const CardInfoComponent: React.FC = () => {
  const { book } = useContext(ShelfContext);

  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (book.name) {
      setShow(true);
      const offset = offsetBookcase();
      if (offset) {
        setTop(offset.top);
        setLeft(offset.left);
      }
    } else setShow(false);
  }, [book]);

  const offsetBookcase = (): { left: number; top: number } | undefined => {
    const bookcase = document
      .getElementById('bookcase')
      ?.getBoundingClientRect();

    const divBook = document.getElementById(book.id)?.getBoundingClientRect();
    if (divBook && bookcase) {
      console.log(bookcase.top);
      console.log(divBook.top);
      return {
        left: divBook.left - bookcase.left,
        top: divBook.top - bookcase.top,
      };
    }
  };

  return (
    <CardInfos top={top} left={left} show={show}>
      <p onClick={() => setShow(false)}>x</p>
      <h2>{book.name}</h2>
      <p> Criar novo livro</p>
      <p>Deletar livro</p>
      <p>Editar livro</p>
    </CardInfos>
  );
};

export default CardInfoComponent;
