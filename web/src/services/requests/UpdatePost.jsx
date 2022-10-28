import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";

export const UpdatePost = async (
  body,
  setLoading,
  id,
) => {
  try {
    await setLoading(true);
    await axios.put(`${baseUrl}/posts/${id}`, body);
    await setLoading(false);
  } catch (error) {
    console.log(error.response);
    setLoading(false);
  }
};
