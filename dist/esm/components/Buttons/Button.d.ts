import { MouseEventHandler, ReactElement } from 'react';
import { CSSObject } from '@emotion/react';
type Button = {
    children: ReactElement | string;
    className?: {
        button?: CSSObject;
    };
    type?: HTMLButtonElement['type'];
    kind?: 'primary' | 'secondary' | 'tertiary';
    size?: 'large' | 'medium' | 'small';
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
export declare const Button: React.FC<Button>;
export {};
