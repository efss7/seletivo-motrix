import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";

export const FindAll = (setPosts, setLoading) => {
  setLoading(true);
  axios
    .get(`${baseUrl}/posts`)
    .then((res) => {
      setPosts(res.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
};
