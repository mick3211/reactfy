import { NavList, SidebarContainer } from './Sidebar.styled';
import { HomeIcon, MagnifyingGlassIcon, RowsIcon } from '@radix-ui/react-icons';
import { Divider } from 'ui/components/dataDisplay/Divider/Divider';

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
    return (
        <SidebarContainer>
            <NavList>
                {navLinks.map(link => (
                    <li key={link.href}>
                        <a href={link.href}>
                            <link.Icon />
                            {link.name}
                        </a>
                    </li>
                ))}
            </NavList>
            <Divider css={{ my: 1 }} />
        </SidebarContainer>
    );
};
