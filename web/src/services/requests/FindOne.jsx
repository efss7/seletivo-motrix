import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";

export const FindOne = async (setPost, setLoading, id) => {
  try {
    await setLoading(true);
    const result = await axios.get(`${baseUrl}/posts/${id}`);
    await setPost(result.data[0]);
    await setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};
