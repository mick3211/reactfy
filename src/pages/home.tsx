import { PlayIcon } from '@radix-ui/react-icons';
import { useHomePage } from 'data/hooks/pages/useHome.page';
import { ItemCard } from 'ui/components/dataDisplay/ItemCard/ItemCard';
import { Button } from 'ui/components/inputs/Button/Button';
import {
    Greetings,
    HomeContainer,
    RecentsContainer,
    RecentsList,
} from 'ui/styles/pages/home.styled';

export const HomePage: React.FC = () => {
    const { greetings, highlightColor, recentlyPlayed, data } = useHomePage();

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
            <HomeContainer>
                <h4>{data?.message}</h4>
                {data?.playlists.items.map(playlist => (
                    <ItemCard
                        href={`/playlists/${playlist.id}`}
                        key={playlist.id}
                        playButton
                        title={playlist.name}
                        img={playlist.images?.[0]?.url || ''}
                        alt={playlist.name}
                        description={playlist.description}
                    />
                ))}
            </HomeContainer>
        </>
    );
};
