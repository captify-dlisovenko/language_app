export const LOADED_ALL_QUOTES = 'LOADED_ALL_QUOTES';
export const LOADED_RANDOM_QUOTE = 'LOADED_RANDOM_QUOTE';
export const ERROR_LOADING_DATA = ' ERROR_LOADING_DATA';

const api = 'https://programming-quotes-api.herokuapp.com'

export function loadAllQuotes() {
    return (dispatch) => {
        fetch(`${api}/quotes`)
            .then(res => res.json())
            .then(res => dispatch({type: LOADED_ALL_QUOTES, payload: res}))
            .catch(err => dispatch({type: ERROR_LOADING_DATA, payload: err}))
    }
}

export function loadRandomQuote() {
    return (dispatch) => {
        fetch(`${api}/quotes/random`)
            .then(res => res.json())
            .then(res => dispatch({type: LOADED_RANDOM_QUOTE, payload: res}))
            .catch(err => dispatch({type: ERROR_LOADING_DATA, payload: err}))
    }
}