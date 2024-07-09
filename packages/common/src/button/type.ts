import { ReactNode, SyntheticEvent } from 'react';

export enum ButtonColor {
  Gray = 'gray',
  Blue = 'sky',
  Red = 'rose',
  White = 'white',
}

export interface ButtonProps {
  variant: 'Default' | 'Outlined' | 'Text';
  color: 'Secondary' | 'Primary' | 'Error' | 'Warning' | 'Info' | 'Default';
  size?: 'Small' | 'Middle' | 'Large';
  label?: string | ReactNode;
  className?: string;
  onClick?: (event: SyntheticEvent) => void;
  disabled?: boolean;
  icon?: ReactNode;
  subIcon?: ReactNode;
  block?: boolean;
}
