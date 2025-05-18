import { BOOKS_SET, MYBOOKS_SET, MYBOOK_ADD, MYBOOK_UPDATE } from '../actionTypes';

const initialState = {
    books: [],
    myBooks: []
};

export default function bookReducer(state = initialState, action) {
    switch (action.type) {
        case BOOKS_SET:
            return { ...state, books: action.payload };
        case MYBOOKS_SET:
            return { ...state, myBooks: action.payload };
        case MYBOOK_ADD:
            return { ...state, myBooks: [...state.myBooks, action.payload] };
        case MYBOOK_UPDATE:
            if (!action.payload || !action.payload._id) {
                console.warn("MYBOOK_UPDATE: Invalid payload", action.payload);
                return state;
            }
            return {
                ...state,
                myBooks: state.myBooks.map((b) =>
                    b._id === action.payload._id ? action.payload : b
                ),
            };

        default:
            return state;
    }
}