import { Form } from './Form';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../hooks/redux-hooks';

const SignUp = () => {
    const dispatch = useAppDispatch();
    const history = useNavigate();

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
            .catch(console.error);
    };
    return <Form title="Register" handleClick={handleRegister} />;
};

export { SignUp };
