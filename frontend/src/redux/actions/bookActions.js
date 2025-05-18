import api from '../../axios';
import { BOOKS_SET, MYBOOKS_SET, MYBOOK_ADD, MYBOOK_UPDATE } from '../actionTypes';

export const fetchBooks = () => async (dispatch) => {
    const { data } = await api.get('/books');
    dispatch({ type: BOOKS_SET, payload: data });
};

export const fetchMyBooks = () => async (dispatch) => {
    const { data } = await api.get('/mybooks');
    dispatch({ type: MYBOOKS_SET, payload: data });
};

export const addToMyBooks = (bookId) => async (dispatch) => {
    const { data } = await api.post(`/mybooks/${bookId}`);
    dispatch({ type: MYBOOK_ADD, payload: data });
};

export const updateStatus = (bookId, status) => async (dispatch) => {
    console.log("Updating book:", bookId, status);
    const { data } = await api.patch(`/mybooks/${bookId}/status`, { status });
    if (!data || !data._id) {
        console.log("Invalid response", data);
        return;
    }
    dispatch({ type: MYBOOK_UPDATE, payload: data });
};

export const updateRating = (bookId, rating) => async (dispatch) => {
    const { data } = await api.patch(`/mybooks/${bookId}/rating`, { rating });
    dispatch({ type: MYBOOK_UPDATE, payload: data });
};