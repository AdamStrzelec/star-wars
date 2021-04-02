import { actionTypes } from '../actionTypes/actionTypes';
import { getCharacters } from '../api/charactersApi';

export const fetchCharacters = (pageNumber: number, characters: Array<any>) => {
        return function (dispatch: any) {
            return getCharacters(pageNumber)
                .then(response => {
                    dispatch({
                        type: actionTypes.FETCH_CHARACTERS,
                        payload: {
                            characters: [...characters, ...response.data.results],
                            hasNextPage: true,
                        }
                    })
                })
                .catch(()=>{
                    dispatch({
                        type: actionTypes.FETCH_CHARACTERS,
                        payload: {
                            characters: characters,
                            hasNextPage: false
                        }
                    })
                })
        }
}