import { Form } from './Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../hooks/redux-hooks';

const SignUp = () => {
    const dispatch = useAppDispatch();
    const history = useNavigate();
    const [showAlert, setShowAlert] = useState(false);

    const updateAlert = (value: boolean) => {
        setShowAlert(value);
    };

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.refreshToken,
                    })
                );
                history('/');
            })
            .catch(() => setShowAlert(true));
    };
    return (
        <Form
            title="SignUp"
            handleClick={handleRegister}
            showAlert={showAlert}
            updateAlert={updateAlert}
        />
    );
};

export { SignUp };
