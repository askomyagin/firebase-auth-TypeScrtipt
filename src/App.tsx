import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { css } from '@emotion/css';

const App = () => {
    return (
        <div
            className={css`
                margin: 0;
                padding: 2rem;
            `}
        >
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </div>
    );
};

export default App;
