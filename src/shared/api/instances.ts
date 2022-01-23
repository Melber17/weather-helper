// eslint-disable-next-line import/no-unresolved
import { API_URL } from "@env";
import axios from "axios";

export const instance = axios.create({ baseURL: API_URL });
