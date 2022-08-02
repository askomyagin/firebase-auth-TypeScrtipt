import { Form } from './Form';
import { setUser } from 'store/slices/userSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../hooks/redux-hooks';

const Login = () => {
    const dispatch = useAppDispatch();
    const history = useNavigate();
    const [showAlert, setShowAlert] = useState(false);

    const updateAlert = (value: boolean) => {
        setShowAlert(value);
    };

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
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
            .catch((error) => setShowAlert(error));
    };

    return (
        <Form
            title="Sign In"
            handleClick={handleLogin}
            showAlert={showAlert}
            updateAlert={updateAlert}
        />
    );
};

export { Login };
