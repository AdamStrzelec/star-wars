import axios from 'axios';

const URL = 'http://swapi.dev/api/people/';

export const getCharacters = (pageNumber: number): Promise<any> => {
    return axios.get(`${URL}?page=${pageNumber}`);
}