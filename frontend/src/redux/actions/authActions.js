import api from "../../axios";
import { AUTH_LOADING, AUTH_LOGOUT, AUTH_SUCCESS } from "../actionTypes"


export const checkCurrentUser = () => async (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    try {
        const { data } = await api.get("/auth/me");
        dispatch({ type: AUTH_SUCCESS, payload: data });
    } catch {
        dispatch({ type: AUTH_LOGOUT });
    }
};

export const login = (email, password, navigate) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_LOADING });
        await api.post('/auth/login', { email, password });
        const { data } = await api.get('/auth/me');
        dispatch({ type: AUTH_SUCCESS, payload: data });
        navigate('/');
    } catch (error) {
        alert(error.response?.data?.message || 'Login failed');
        dispatch({ type: AUTH_LOGOUT });
    }
};

export const register = (email, password, navigate) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_LOADING });
        await api.post('/auth/register', { email, password });
        await dispatch(login(email, password, navigate));
    } catch (error) {
        alert(error.response?.data?.message || 'Registration failed');
        dispatch({ type: AUTH_LOGOUT });
    }
};

export const logout = (navigate) => async (dispatch) => {
    await api.get('/auth/logout');
    dispatch({ type: AUTH_LOGOUT });
    navigate('/login');
};