import { Form } from './Form';
import { setUser } from 'store/slices/userSlice';

import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../hooks/redux-hooks';

const Login = () => {
    const dispatch = useAppDispatch();
    const history = useNavigate();

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
            .catch(() => alert('Invalide user'));
    };
    return <Form title="sign in" handleClick={handleLogin} />;
};

export { Login };
