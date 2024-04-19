import axios from 'axios';
import {
    authRequest,
    stuffAdded,
    authSuccess,
    authFailed,
    authError,
    authLogout,
    doneSuccess,
    getDeleteSuccess,
    getRequest,
    getFailed,
    getError,
} from './userSlice';

export const loginUser = (fields, role) => async (dispatch) => {
    dispatch(authSuccess({name: 'long'})) // for testing
    dispatch(authRequest());
    // role = Student || Lecturer || Admin
    // handle login user
    try {

    } catch (error) {
        dispatch(authError(error));
    }
};

// Handle Register
export const registerUser = (fields, role) => async (dispatch) => {
    dispatch(authRequest());

    try {
        
    } catch (error) {
        
    }
};

export const logoutUser = () => (dispatch) => {
    // handle Logout
    dispatch(authLogout());
};

export const getUserDetails = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    // handle get user details
    try {
        
    } catch (error) {
        dispatch(getError(error));
    }
}

export const deleteUser = (id, address) => async (dispatch) => {
    dispatch(getRequest());
    dispatch(getFailed("Sorry the delete function has been disabled for now."));
}

export const updateUser = (fields, id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        // update user
    } catch (error) {
        dispatch(getError(error));
    }
}
