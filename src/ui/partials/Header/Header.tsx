import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons';
import { userContext } from 'data/contexts/UserContext';
import {
    ButtonsContainer,
    HeaderContainer,
} from 'ui/partials/Header/Header.styled';
import { useContext } from 'react';
import { UserAvatarMenu } from 'ui/components/dataDisplay/UserAvatarMenu/UserAvatarMenu';
import { Button } from 'ui/components/inputs/Button/Button';

export const Header: React.FC = () => {
    const {
        userState: { user },
    } = useContext(userContext);

    return (
        <HeaderContainer>
            <ButtonsContainer>
                <Button shape="circular" type="button" color="dark">
                    <CaretLeftIcon />
                </Button>
                <Button shape="circular" type="button" color="dark">
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
