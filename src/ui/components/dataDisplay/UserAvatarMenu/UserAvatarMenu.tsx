import { CaretDownIcon, ExternalLinkIcon } from '@radix-ui/react-icons';
import { Portal, Root } from '@radix-ui/react-popover';
import { LoginService } from 'data/services/LoginService';
import { Divider } from '../Divider/Divider';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { ContentStyled, TriggerStyled } from './UserAvatarMenu.styled';

interface UserAvatarMenuProps {
    name: string;
    img?: string;
}

export const UserAvatarMenu: React.FC<UserAvatarMenuProps> = ({
    name,
    img,
}) => {
    const Logout = () => {
        LoginService.logout();
        window.location.reload();
    };

    return (
        <Root>
            <TriggerStyled>
                <UserAvatar img={img} />
                <span>{name}</span>
                <CaretDownIcon />
            </TriggerStyled>
            <Portal>
                <ContentStyled sideOffset={8} align="end">
                    <ul>
                        <li>
                            Conta <ExternalLinkIcon />
                        </li>
                        <li>Perfil</li>
                        <li>Sessão particular</li>
                        <li>Configurações</li>
                        <Divider />
                        <li onClick={Logout}>Sair</li>
                    </ul>
                </ContentStyled>
            </Portal>
        </Root>
    );
};
