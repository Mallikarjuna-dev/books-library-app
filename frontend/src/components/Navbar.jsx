import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authActions.js';

export default function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => dispatch(logout(navigate));

    return (
        <nav className="bg-white shadow-sm mb-4">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-blue-600">My Library</Link>
                <div className="space-x-4">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    {user && <Link to="/mybooks" className="hover:text-blue-600">My Books</Link>}
                    {!user ? (
                        <>
                            <Link to="/login" className="hover:text-blue-600">Login</Link>
                            <Link to="/register" className="hover:text-blue-600">Register</Link>
                        </>
                    ) : (
                        <button onClick={handleLogout} className="hover:text-red-500">Logout</button>
                    )}
                </div>
            </div>
        </nav>
    );
}

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../redux/actions/authActions';

// const Navbar = () => {
//     const dispatch = useDispatch();
//     const { user } = useSelector((state) => state.auth);

//     return (
//         <nav className="bg-white shadow-md p-4 flex justify-between items-center">
//             <h1 className="text-xl font-bold">My Library</h1>
//             <div className="space-x-4">
//                 <Link to="/">Home</Link>
//                 {user ? (
//                     <>
//                         <Link to="/mybooks">My Books</Link>
//                         <span>{user.email}</span>
//                         <button onClick={() => dispatch(logout())} className="text-red-600">Logout</button>
//                     </>
//                 ) : (
//                     <>
//                         <Link to="/login">Login</Link>
//                         <Link to="/register">Register</Link>
//                     </>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;