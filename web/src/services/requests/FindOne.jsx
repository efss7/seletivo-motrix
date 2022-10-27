/* eslint-disable no-undef */
import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";

export const FindOne = (postId) => axios
  .get(`${baseUrl}/posts/${postId}`);
