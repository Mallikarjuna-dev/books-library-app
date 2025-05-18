import React from 'react';
import { useDispatch } from 'react-redux';
import { updateStatus, updateRating } from '../redux/actions/bookActions';

const MyBookCard = ({ book }) => {
    const dispatch = useDispatch();

    return (
        <div className="border p-4 rounded bg-white">
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{book.author}</p>

            <select
                value={book.status}
                onChange={(e) => dispatch(updateStatus(book._id, e.target.value))}
                className="mb-2 border p-1 rounded w-full"
            >
                <option>Want to Read</option>
                <option>Currently Reading</option>
                <option>Read</option>
            </select>

            <input
                type="number"
                min="1"
                max="5"
                value={book.rating || ''}
                onChange={(e) => dispatch(updateRating(book.bookId, Number(e.target.value)))}
                className="w-full border p-1 rounded"
                placeholder="Rate (1-5)"
            />
        </div>
    );
};

export default MyBookCard;