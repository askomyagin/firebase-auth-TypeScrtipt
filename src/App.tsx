import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import styled from '@emotion/styled';

const AppContainer = styled.div`
    max-width: 100%;
    background-color: #fff;
    height: 100vh;
`;

const App = () => {
    return (
        <AppContainer>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </AppContainer>
    );
};

export default App;
