/* eslint-disable no-unused-vars */
import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";

export const UpdatePost = (
  body,
  setLoading,
  setModalSuccess,
  setModalServerError,
  setServerMessageError,
  id,
) => {
  setLoading(true);
  axios
    .put(`${baseUrl}/posts/${id}`, body)
    .then((res) => {
      setLoading(false);
      setModalSuccess(true);
      console.log(res);
    })
    .catch((error) => {
      console.log(error.response);
      setServerMessageError(error.response.data.error);
      setModalServerError(true);
      setLoading(false);
    });
};
