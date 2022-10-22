/* eslint-disable no-unused-vars */
import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";

export const CreatePost = (
  body,
  setIsLoading,
  setDisplaySuccessPopUp,
  setDisplayServerError,
  setServerMessageError,
) => {
  setIsLoading(true);
  console.log(setDisplayServerError, setServerMessageError);
  axios
    .post(`${baseUrl}/posts`, body)
    .then((res) => {
      setIsLoading(false);
      setDisplaySuccessPopUp(true);
    })
    .catch((error) => {
      console.log(error.response);
      setServerMessageError(error.response.data.error);
      setDisplayServerError(true);
      setIsLoading(false);
    });
};
