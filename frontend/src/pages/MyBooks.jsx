import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyBooks } from '../redux/actions/bookActions';
import MyBookCard from '../components/MyBookCard';

const MyBooks = () => {
    const dispatch = useDispatch();
    const { myBooks, loading } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(fetchMyBooks());
    }, [dispatch]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">My Books</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {myBooks.map((book) => (
                        <MyBookCard key={book.bookId} book={book} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBooks;