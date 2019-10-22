import React, { createContext, useState } from "react";

export const ModalContext = createContext();

/**
 * ModalContext
 * @desc responsible for modal open close and showing state
 */
const ModalContextProvider = ({children}) => {
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <ModalContext.Provider value={{ show, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
