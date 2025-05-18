import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToMyBooks } from '../redux/actions/bookActions';

const BookCard = ({ book }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleClick = () => {
        if (!user) return alert('Please log in to add books.');
        dispatch(addToMyBooks(book._id));
    };

    return (
        <div className="border p-4 rounded bg-white">
            <img src={book.coverImage} alt={book.title} className="w-full h-48 object-cover mb-2" />
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{book.author}</p>
            <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={handleClick}>
                Want to Read
            </button>
        </div>
    );
};

export default BookCard;