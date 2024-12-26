import axios from "axios";

export const publicAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});