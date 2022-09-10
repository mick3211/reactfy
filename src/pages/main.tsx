import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Header } from 'ui/partials/Header/Header';
import { Sidebar } from 'ui/partials/Sidebar/Sidebar';
import { MainGrid } from 'ui/styles/pages/main.styled';

export const MainPage: React.FC = () => {
    const location = useLocation();

    if (location.pathname === '/') {
        return <Navigate to={'/home'} />;
    }

    return (
        <MainGrid>
            <Header />
            <Sidebar />
            <main>
                <Outlet />
            </main>
            <div
                style={{ backgroundColor: '#111', gridArea: 'controls' }}
            ></div>
        </MainGrid>
    );
};
