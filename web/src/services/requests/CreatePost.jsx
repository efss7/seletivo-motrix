/* eslint-disable no-unused-vars */
import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";

export const CreatePost = (
  body,
  setLoading,
  setModalSuccess,
  setModalServerError,
  setServerMessageError,
) => {
  setLoading(true);
  axios
    .post(`${baseUrl}/posts`, body)
    .then((res) => {
      setLoading(false);
      setModalSuccess(true);
    })
    .catch((error) => {
      console.log(error.response);
      setServerMessageError(error.response.data.error);
      setModalServerError(true);
      setLoading(false);
    });
};
