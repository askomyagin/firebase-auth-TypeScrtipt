import { SignUp } from 'components/SignUp';
import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <SignUp />
            <Link to="/login">Sing in</Link>
        </div>
    );
};

export default RegisterPage;
