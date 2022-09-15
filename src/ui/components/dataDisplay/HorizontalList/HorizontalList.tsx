import React from 'react';
import { Link } from 'react-router-dom';
import { ListHeader, HorizontalListContent } from './HorizontalList.styled';

interface HorizontalListProps {
    title?: string;
    href?: string;
    children: React.ReactNode;
}

export const HorizontalList: React.FC<HorizontalListProps> = ({
    children,
    href,
    title,
}) => {
    return (
        <div>
            <ListHeader>
                <h5>{title}</h5>
                {href && <Link to={href}>VER MAIS</Link>}
            </ListHeader>
            <HorizontalListContent>{children}</HorizontalListContent>
        </div>
    );
};
