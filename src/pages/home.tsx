import { PlayIcon } from '@radix-ui/react-icons';
import { useHomePage } from 'data/hooks/pages/useHome.page';
import { Button } from 'ui/components/inputs/Button/Button';
import {
    Greetings,
    HomeContainer,
    RecentsContainer,
    RecentsList,
} from 'ui/styles/pages/home.styled';

export const HomePage: React.FC = () => {
    const { greetings, highlightColor, recentlyPlayed } = useHomePage();

    return (
        <>
            <RecentsContainer css={{ '--color': highlightColor }}>
                <Greetings>{greetings}</Greetings>
                <RecentsList>
                    {recentlyPlayed?.items.map(item => (
                        <li key={item.track.id}>
                            <img src={item.track.album.images[2].url} alt="" />
                            <p>{item.track.name}</p>
                            <Button shape="circular">
                                <PlayIcon width={24} height={24} />
                            </Button>
                        </li>
                    ))}
                </RecentsList>
            </RecentsContainer>
            <HomeContainer></HomeContainer>
        </>
    );
};
