/* eslint-disable consistent-return */
import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";

export const FindHistoryById = (id) => {
  try {
    return axios.get(`${baseUrl}/history/${id}`);
  } catch (error) {
    console.log(error);
  }
};
