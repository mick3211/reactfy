import { LoginCallback } from 'pages/login/callback';
import { LoginPage } from 'pages/login/index';
import { MainPage } from 'pages/main';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AnonymousRoute } from 'ui/components/utils/AnonymousRoute';
import { PrivateRoute } from 'ui/components/utils/PrivateRoute';
import { HomePage } from './pages/home';
import { globalStyles } from './ui/styles/theme';

export const App: React.FC = () => {
    globalStyles();

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <MainPage />
                    </PrivateRoute>
                }
            >
                <Route path="home" element={<HomePage />} />
            </Route>
            <Route
                path="/login"
                element={
                    <AnonymousRoute>
                        <LoginPage />
                    </AnonymousRoute>
                }
            />
            <Route
                path="/login/callback"
                element={
                    <AnonymousRoute>
                        <LoginCallback />
                    </AnonymousRoute>
                }
            />
        </Routes>
    );
};
