import { Progress, RangeWrapper } from './Range.styled';

interface RangeProps {
    value: number;
    onChange: (value: number) => void;
    maxWidth?: string;
    width?: string;
    disabled?: boolean;
}

export const Range: React.FC<RangeProps> = ({
    onChange,
    value = 50,
    maxWidth = 'unset',
    width = '100%',
    disabled,
}) => {
    return (
        <RangeWrapper css={{ '--max-width': maxWidth, '--width': width }}>
            <input
                type="range"
                min="0"
                max="100"
                disabled={disabled}
                onChange={ev => onChange(Number(ev.target.value))}
            />
            <Progress css={{ '--value': `${value}%` }} />
        </RangeWrapper>
    );
};
