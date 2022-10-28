import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";

export const FindAll = async (setPosts, setLoading) => {
  try {
    await setLoading(true);
    const result = await axios.get(`${baseUrl}/posts`);
    setPosts(result.data);
    await setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};
