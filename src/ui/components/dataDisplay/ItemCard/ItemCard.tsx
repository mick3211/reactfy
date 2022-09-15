import { PlayIcon } from '@radix-ui/react-icons';
import { Button } from 'ui/components/inputs/Button/Button';
import { Wrapper } from './ItemCard.styled';

interface ItemCardProps {
    img: string;
    alt?: string;
    title: string;
    description?: string;
    href: string;
    playButton?: boolean;
}

export const ItemCard: React.FC<ItemCardProps> = ({
    alt,
    img,
    title,
    description,
    href,
    playButton,
}) => {
    return (
        <Wrapper to={href}>
            {playButton && (
                <Button shape="circular">
                    <PlayIcon width={32} height={32} />
                </Button>
            )}
            <img src={img} alt={alt} />
            <h6>{title}</h6>
            <span dangerouslySetInnerHTML={{ __html: description || '' }} />
        </Wrapper>
    );
};
