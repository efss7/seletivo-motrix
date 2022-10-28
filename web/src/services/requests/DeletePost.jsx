/* eslint-disable no-unused-vars */
import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";

export const DeletePost = async (id) => {
  try {
    await axios.delete(`${baseUrl}/posts/${id}`);
  } catch (error) {
    console.log(error);
  }
};
