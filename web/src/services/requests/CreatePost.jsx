import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";

export const CreatePost = async (
  body,
  setLoading,
  setModalSuccess,
  setModalServerError,
  setServerMessageError,
) => {
  try {
    await setLoading(true);
    await axios.post(`${baseUrl}/posts`, body);
    await setModalSuccess(true);
  } catch (error) {
    console.log(error.response);
    setServerMessageError(error.response.data.error);
    setModalServerError(true);
    setLoading(false);
  }
};
