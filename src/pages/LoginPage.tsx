import { Link } from 'react-router-dom';
import { Login } from 'components/Login';
import { H1, P, PageContainer } from './stylePages';

const LoginPage = () => {
    return (
        <PageContainer>
            <H1>Login</H1>
            <Login />
            <P>
                <Link
                    to="/register"
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    Register
                </Link>
            </P>
        </PageContainer>
    );
};

export default LoginPage;
