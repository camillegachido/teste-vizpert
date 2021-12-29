import React, { useCallback, useContext, useState } from 'react';

import { EditModal } from '../../styles/modals';
import { ShelfContext } from '../../context/shelf';
import { ModalProps } from '../../interfaces';

const ModalEditComponent: React.FC<ModalProps> = ({ show, setShow }) => {
  const { book, edit } = useContext(ShelfContext);

  const [newName, setNewName] = useState(book.name);

  const onSave = useCallback(() => {
    if (newName != book.name && newName != '') {
      edit(newName);
      setShow(false);
    } else {
      console.log('error');
    }
  }, [newName, book]);

  return (
    <EditModal show={show}>
      <h1>EDITE O LIVRO</h1>
      <label>Novo nome: </label>
      <input
        type="text"
        value={newName}
        onChange={({ target }) => setNewName(target.value)}
      />
      <button onClick={() => onSave()}>SALVAR</button>
    </EditModal>
  );
};

export default ModalEditComponent;
