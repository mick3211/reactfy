import { PlaybackProvider } from 'data/contexts/PlaybackContext';
import { useEffect, useRef, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Header } from 'ui/partials/Header/Header';
import { Player } from 'ui/partials/Player/Player';
import { Sidebar } from 'ui/partials/Sidebar/Sidebar';
import { MainGrid } from 'ui/styles/pages/main.styled';

export const MainPage: React.FC = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const mainRef = useRef<HTMLDivElement>(null);

    if (location.pathname === '/') {
        return <Navigate to={'/home'} />;
    }

    useEffect(() => {
        const mainElement = mainRef.current;

        const setScrolled = (_ev: Event) => {
            if (mainElement) {
                if (mainElement.scrollTop > 10) {
                    setIsScrolled(true);
                } else setIsScrolled(false);
            }
        };

        if (mainElement) {
            mainElement.addEventListener('scroll', setScrolled);
        }

        return () => mainElement?.removeEventListener('scroll', setScrolled);
    }, []);

    return (
        <PlaybackProvider>
            <MainGrid>
                <Header isOpaque={isScrolled} />
                <Sidebar currentPage={location.pathname} />
                <main ref={mainRef}>
                    <Outlet />
                </main>
                <Player />
            </MainGrid>
        </PlaybackProvider>
    );
};
