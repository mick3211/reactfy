import React from 'react';
import { TableCell, TableContainer, TableRow } from './Table.styled';

interface TableInterface<T> {
    header: React.ReactNode[];
    data: T[];
    gridCols?: string;
    render: (data: T, index: number) => React.ReactNode;
}

type TableComponent = <T>(props: TableInterface<T>) => React.ReactElement;

export const Table: TableComponent = ({ header, data, gridCols, render }) => {
    return (
        <TableContainer
            css={{
                '--grid-cols': gridCols || `repeat(${header.length}, auto)`,
            }}
        >
            <TableRow>
                {header.map((item, index) => (
                    <TableCell key={index}>{item}</TableCell>
                ))}
            </TableRow>
            {data.map((item, index) => render(item, index))}
        </TableContainer>
    );
};

export { TableRow, TableCell };
