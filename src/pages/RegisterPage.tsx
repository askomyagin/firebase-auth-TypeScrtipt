import { SignUp } from 'components/SignUp';
import { Link } from 'react-router-dom';
import { H1, P, PageContainer } from './stylePages';

const RegisterPage = () => {
    return (
        <PageContainer>
            <H1>Registration</H1>
            <SignUp />
            <P>
                <Link
                    to="/login"
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    Sign In
                </Link>
            </P>
        </PageContainer>
    );
};

export default RegisterPage;
