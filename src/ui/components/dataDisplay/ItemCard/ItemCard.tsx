import { PlayIcon } from '@radix-ui/react-icons';
import { Button } from 'ui/components/inputs/Button/Button';
import { ClampText, Wrapper } from './ItemCard.styled';

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
            <div>
                <img src={img} alt={alt || title} />
                {playButton && (
                    <Button shape="circular">
                        <PlayIcon width={32} height={32} />
                    </Button>
                )}
            </div>
            <h6>{title}</h6>
            <ClampText>
                <span dangerouslySetInnerHTML={{ __html: description || '' }} />
            </ClampText>
        </Wrapper>
    );
};
