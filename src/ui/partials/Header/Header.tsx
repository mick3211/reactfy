import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons';
import { userContext } from 'data/contexts/UserContext';
import {
    ButtonsContainer,
    HeaderContainer,
} from 'ui/partials/Header/Header.styled';
import { useContext } from 'react';
import { UserAvatarMenu } from 'ui/components/dataDisplay/UserAvatarMenu/UserAvatarMenu';
import { Button } from 'ui/components/inputs/Button/Button';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    isOpaque?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isOpaque = true }) => {
    const {
        userState: { user },
    } = useContext(userContext);
    const navigate = useNavigate();

    return (
        <HeaderContainer
            css={{ backgroundColor: isOpaque ? '$slate2' : 'transparent' }}
        >
            <ButtonsContainer>
                <Button
                    shape="circular"
                    type="button"
                    color="dark"
                    onClick={() => navigate(-1)}
                >
                    <CaretLeftIcon />
                </Button>
                <Button
                    shape="circular"
                    type="button"
                    color="dark"
                    onClick={() => navigate(1)}
                >
                    <CaretRightIcon />
                </Button>
            </ButtonsContainer>
            <UserAvatarMenu
                name={user.display_name}
                img={user?.images[0]?.url}
            />
        </HeaderContainer>
    );
};
