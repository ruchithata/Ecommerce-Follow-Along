import { setEmail } from './userReducer';

export const storeUserEmail = (email) => (dispatch) => {
    dispatch(setEmail(email));
};
