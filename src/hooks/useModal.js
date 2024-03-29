import { useContext } from "react";
import { ModalContext } from "../context";

export default useModal = () => {
  const { modalVisible, toggleModal } = useContext(ModalContext);
  return { modalVisible, toggleModal };
};
