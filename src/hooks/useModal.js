import { useContext } from "react";
import { ModalContext } from "../context";

const useModal = () => {
  const { modalVisible, toggleModal } = useContext(ModalContext);
  return { modalVisible, toggleModal };
};

export default useModal;
