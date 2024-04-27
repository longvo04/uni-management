import { auth, db, collection, doc, setDoc, getDocFromServer } from "../../firebase/client.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import Cookies from 'universal-cookie';
const cookies = new Cookies();


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
    // // test
    // if (role == "Admin") dispatch(authSuccess("Admin"))
    // else if (role == "Student") dispatch(authSuccess("Student"))
    // else if (role == "Lecturer") dispatch(authSuccess("Lecturer"))
    // end test
    const { email, password } = fields;
    if (email == 'teacher@gmail.com' && password == '123456') dispatch(authSuccess("teacher"))
    else if (email == 'student@gmail.com' && password == '123456') dispatch(authSuccess("student"))
    else
    try {
		const { user } = await signInWithEmailAndPassword(auth, email, password);
        console.log(user.uid)
		const api_res = await fetch("http://localhost:3000/api/auth", {
			method: "POST",
            credentials: "include",
			headers: {
                "Access-Control-Allow-Origin": "http://localhost:5173",
				Authorization: `Bearer ${await user.getIdToken()}`,
			},
		})
		if (!api_res.ok) {
			console.log(await api_res.text());
		}
        const uid = user.uid;
        try {
            const docRef = doc(db, "users", uid);
            const docSnap = await getDocFromServer(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                const currentRole = data.role;
                localStorage.setItem('uid', JSON.stringify(uid))
                dispatch(authSuccess(currentRole));
              } else {
                // docSnap.data() will be undefined in this case
                throw new Error("No such User!");
              }
		} catch (error) {
			console.error(error.code, error.message);
		}
        
	} catch (error) {
		return res.status(400).send("Invalid email or password");
        // dispatch(authError(error));
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
