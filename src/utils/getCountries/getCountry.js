import axios from "axios";

export const getCoutry = async id => {
    const { data } = await axios.get(`/name/${id}`);
}