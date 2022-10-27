import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";

export const FindHistoryById = (id) => axios
  .get(`${baseUrl}/history/${id}`);
