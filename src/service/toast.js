import { toast } from 'react-toastify';

export const notifyToastInfo = ({ message }) => {
  return () => { toast.info(message) };
};
