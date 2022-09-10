import { NavList, PlaylistsWrapper, SidebarContainer } from './Sidebar.styled';
import {
    ExclamationTriangleIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    RowsIcon,
} from '@radix-ui/react-icons';
import { Divider } from 'ui/components/dataDisplay/Divider/Divider';
import { useApiSWR } from 'data/hooks/useApiSWR';
import { PlaylistInterface } from 'data/types/PlaylistInterface';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    {
        name: 'Início',
        Icon: HomeIcon,
        href: '/home',
    },
    {
        name: 'Buscar',
        Icon: MagnifyingGlassIcon,
        href: '/search',
    },
    {
        name: 'Sua Biblioteca',
        Icon: RowsIcon,
        href: '/library',
    },
];

export const Sidebar: React.FC = () => {
    const { data } = useApiSWR<{
        href: string;
        items: PlaylistInterface[];
    }>('/me/playlists', { method: 'GET' });
    const playlists = data?.items;
    const location = useLocation();

    return (
        <SidebarContainer>
            <img src="/Spotify_Logo_RGB_Green.png" alt="Spotify" width={128} />
            <nav>
                <NavList>
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <Link
                                to={link.href}
                                className={
                                    location.pathname === link.href
                                        ? 'active'
                                        : ''
                                }
                            >
                                <link.Icon />
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </NavList>
            </nav>
            <Divider css={{ my: 1 }} />
            {playlists ? (
                <PlaylistsWrapper>
                    {playlists.map(playlist => (
                        <li key={playlist.id}>
                            <Link to={`/playlists/${playlist.id}`}>
                                {playlist.name}
                            </Link>
                        </li>
                    ))}
                </PlaylistsWrapper>
            ) : (
                <div style={{ textAlign: 'center' }}>
                    <ExclamationTriangleIcon width={32} height={32} />
                    <p>Erro ao carregar playlists</p>
                </div>
            )}
        </SidebarContainer>
    );
};
