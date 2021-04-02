import axios from 'axios';

export const getFilmName = (URL: string): Promise<any> => {
    return axios.get(URL);
}