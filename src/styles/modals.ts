import styled from 'styled-components';

interface ModalProps {
  show: boolean;
}

export const EditModal = styled.div<ModalProps>`
  position: absolute;
  top: calc(50% - 80px);
  left: calc(50% - 230px);
  padding: 16px 20px;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
  border-radius: 5px;
  display: ${(p) => (p.show ? 'block' : 'none')};
  z-index: 6;

  h1 {
    text-align: center;
    margin: 14px;
  }

  input {
    outline: none;
    display: block;
    width: calc(100% - 32px);
    margin: 5px 0;
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 8px;
    background: #fff;
    border: #d0d0df solid 1px;
    transition: box-shadow 0.2s;
  }

  button {
    width: 100%;
    margin: 0;
    background-color: #d0d0df;
    padding: 12px 0;
    font-size: 14px;
    font-weight: bold;
    border-radius: 8px;
    border: #d0d0df solid 1px;
  }

  button:hover {
    cursor: pointer;
  }
`;

export const OutClick = styled.div<ModalProps>`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  position: fixed;
  height: 100vh;
  z-index: 5;
  left: 0;
  top: 0;
  display: ${(p) => (p.show ? 'block' : 'none')};
`;
