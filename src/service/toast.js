import { toast } from 'react-toastify';

export const notifyToastInfo = ({ message }) => {
  toast.info(message);
};

export const notifyToastWrong = ({ message }) => {
  toast.error(message);
};
