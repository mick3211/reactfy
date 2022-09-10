import { PersonIcon } from '@radix-ui/react-icons';
import { AvatarStyled, FallbackStyled, ImageStyled } from './UserAvatar.styled';

interface UserAvatarProps {
    img?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ img, size }) => {
    return (
        <AvatarStyled size={size || 'md'}>
            <ImageStyled src={img} />
            <FallbackStyled>
                <PersonIcon />
            </FallbackStyled>
        </AvatarStyled>
    );
};
