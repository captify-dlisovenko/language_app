import { LOADED_ALL_QUOTES, LOADED_RANDOM_QUOTE } from '../actions/loadQuotes';


const initialStore = {
    allQuotes: [],
    error: null,
    randomQuote: ''
}

export const quotesReducer = (initalState = initialStore, action ) => {
    if(action.type === LOADED_ALL_QUOTES) {
        return {
            ...initalState,
            allQuotes: action.payload
        }
    }

    if(action.type ===  LOADED_RANDOM_QUOTE) {
        return {
            ...initalState,
            randomQuote: action.payload
        }
    }

    return initalState
};

