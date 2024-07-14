import { ReactNode } from 'react';
import { getColor } from 'utils';

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  variant?: 'outlined' | 'text' | 'contained';
  color?: 'primary' | 'error' | 'warning' | 'success' | 'secondary';
  size: 'small' | 'medium' | 'large';
  block?: boolean;
  icon?: ReactNode;
};

const variantclass = {
  outlined: (color: string) => `border border-${color}-600 bg-white text-${color}-700 hover:bg-${color}-300`,
  text: (color: string) => `bg-white text-${color}-700 hover:bg-${color}-300`,
  contained: (color: string) => `bg-${color}-600 text-white hover:bg-${color}-300`,
};

const sizeclass = {
  small: 'text-sm px-4 py-2',
  medium: 'text-md px-4 py-2',
  large: 'text-lg px-6 py-3',
};

export const Button = ({
  children,
  className = '',
  onClick,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  block = false,
}: ButtonProps) => {
  const variantClass = variantclass[variant](getColor(color));
  const sizeClass = sizeclass[size];
  const blockClass = block ? 'w-full' : '';
  return (
    <button className={`rounded ${variantClass} ${sizeClass} ${className} ${blockClass}`} onClick={onClick}>
      {children}
    </button>
  );
};
