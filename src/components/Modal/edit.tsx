import React, { useCallback, useContext, useState, useEffect } from 'react';

import { Modal, Button } from '../../styles/modals';
import { ShelfContext } from '../../context/shelf';
import { ModalProps } from '../../interfaces';

const ModalEditComponent: React.FC<ModalProps> = ({ show, setShow }) => {
  const { book, edit } = useContext(ShelfContext);

  const [newName, setNewName] = useState(book.name ?? '');

  useEffect(() => {
    setNewName(book.name ?? '');
  }, [show]);

  const onSave = useCallback(() => {
    if (newName != book.name && newName != '') {
      edit(newName);
      setShow(false);
    } else {
      console.log('error');
    }
  }, [newName, book]);

  return (
    <Modal show={show}>
      <p onClick={() => setShow(false)}>x</p>
      <h1>EDITE O LIVRO</h1>
      <label>Novo nome: </label>
      <input
        type="text"
        value={newName}
        onChange={({ target }) => setNewName(target.value)}
      />
      <Button onClick={() => onSave()}>SALVAR</Button>
    </Modal>
  );
};

export default ModalEditComponent;
