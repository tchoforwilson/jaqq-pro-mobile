import { useContext } from "react";
import { AlertContext } from "../context";

/**
 * @breif Custom hook to control alert
 * @param {String} status Status of the alert
 * @param {*} message Message of the alert
 * @param {*} visible Alert is visibility
 */
const useAlert = () => {
  const { alert, setAlert } = useContext(AlertContext);

  return { alert, setAlert };
};

export default useAlert;
