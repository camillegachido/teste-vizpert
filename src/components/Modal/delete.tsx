import React, { useCallback, useContext, useState } from 'react';

import { Modal, Button } from '../../styles/modals';
import { ShelfContext } from '../../context/shelf';
import { ModalProps } from '../../interfaces';

const ModalDeleteComponent: React.FC<ModalProps> = ({ show, setShow }) => {
  const { deleteBook } = useContext(ShelfContext);

  return (
    <Modal show={show}>
      <p onClick={() => setShow(false)}>x</p>
      <h1>DELETE O LIVRO</h1>
      <p>Deseja deletar o livro?</p>
      <Button onClick={() => setShow(false)} btnColor="#d0d0df">
        CANCELAR
      </Button>
      <Button
        onClick={() => {
          deleteBook();
          setShow(false);
        }}
        btnColor="red"
      >
        DELETAR
      </Button>
    </Modal>
  );
};

export default ModalDeleteComponent;
