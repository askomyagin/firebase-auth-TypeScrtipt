import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import { removeUser } from 'store/slices/userSlice';
import { useAppDispatch } from '../hooks/redux-hooks';
import { H1, PageContainer, P } from './stylePages';
import styled from '@emotion/styled';

const HomePage = () => {
    const dispatch = useAppDispatch();

    const { isAuth, email } = useAuth();

    const Button = styled.button`
        margin: 20px 0 10px 0;
        padding: 10px;
        border: none;
        background-color: black;
        color: #fff;
        border-radius: 20px;
        cursor: pointer;
    `;

    return isAuth ? (
        <PageContainer>
            <H1>Welcome</H1>
            <P>
                <Button onClick={() => dispatch(removeUser())}>
                    Log out from {email}
                </Button>
            </P>
        </PageContainer>
    ) : (
        <Navigate to="/login" />
    );
};

export default HomePage;
