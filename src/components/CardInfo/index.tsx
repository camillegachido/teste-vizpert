import React, { useContext, useEffect, useState } from 'react';

import { CardInfos } from '../../styles/bookcase';
import { ShelfContext } from '../../context/shelf';
import { OutClick } from '../../styles/modals';

import ModalEditComponent from '../Modal/edit';
import ModalDeleteComponent from '../Modal/delete';

const CardInfoComponent: React.FC = () => {
  const { book, show, setShow, addBook } = useContext(ShelfContext);

  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

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
        <p onClick={() => addBook()}> Criar novo livro</p>
        <p
          onClick={() => {
            setShow(false);
            setShowDelete(true);
          }}
        >
          Deletar livro
        </p>
        <p
          onClick={() => {
            setShow(false);
            setShowEdit(true);
          }}
        >
          Editar livro
        </p>
      </CardInfos>
      <ModalEditComponent show={showEdit} setShow={setShowEdit} />
      <ModalDeleteComponent show={showDelete} setShow={setShowDelete} />
      <OutClick show={showEdit || showDelete} />
    </>
  );
};

export default CardInfoComponent;
