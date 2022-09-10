import { CaretDownIcon } from '@radix-ui/react-icons';
import { Portal, Root } from '@radix-ui/react-popover';
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
                        <li>Conta</li>
                        <li>Perfil</li>
                        <li>Sessão particular</li>
                        <li>Configurações</li>
                        <Divider />
                        <li>Sair</li>
                    </ul>
                </ContentStyled>
            </Portal>
        </Root>
    );
};
