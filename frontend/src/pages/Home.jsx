import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/actions/bookActions';
import BookCard from '../components/BookCard';

const Home = () => {
    const dispatch = useDispatch();
    const { books, loading } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">All Books</h1>
            {loading ? (
                <p>Loading books...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {books.map((book) => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;