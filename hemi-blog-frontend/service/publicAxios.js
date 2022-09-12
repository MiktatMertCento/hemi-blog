import axios from "axios";

export const publicAxios = axios.create({
    baseURL: "https://BlogBackend.miktatcento.repl.co",
});