import { actionTypes } from '../actionTypes/actionTypes';

const initialState = {
    characters: [],
    hasNextPage: true
}

const rootReducer = (state = initialState, action: any) => {
    switch(action.type){
        case actionTypes.FETCH_CHARACTERS:
            return {...state, characters: action.payload.characters, hasNextPage: action.payload.hasNextPage}
        default:
            return state;
    }
}

export default rootReducer;