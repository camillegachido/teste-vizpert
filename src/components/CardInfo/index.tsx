import React, { useContext, useEffect, useState } from 'react';

import { CardInfos } from '../../styles/bookcase';
import ModalEditComponent from '../Modal/edit';
import { ShelfContext } from '../../context/shelf';
import { OutClick } from '../../styles/modals';

const CardInfoComponent: React.FC = () => {
  const { book } = useContext(ShelfContext);

  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

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
      return {
        left: divBook.left - bookcase.left,
        top: divBook.top - bookcase.top,
      };
    }
  };

  return (
    <>
      <CardInfos top={top} left={left} show={show}>
        <p onClick={() => setShow(false)}>x</p>
        <h2>{book.name}</h2>
        <p> Criar novo livro</p>
        <p>Deletar livro</p>
        <p onClick={() => setShowEdit(true)}>Editar livro</p>
      </CardInfos>
      <ModalEditComponent show={showEdit} setShow={setShowEdit} />
      <OutClick show={showEdit} />
    </>
  );
};

export default CardInfoComponent;
