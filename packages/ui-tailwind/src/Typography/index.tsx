import { ReactNode } from 'react';
import { colorText } from 'utils';

export type TypographyProps = {
  children: ReactNode;
  className?: string;
  color?: 'primary' | 'error' | 'warning' | 'success' | 'secondary';
  variant?: 'title' | 'header' | 'subtitle' | 'body' | 'description';
  component?: 'span' | 'div' | 'label' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const variantText = {
  title: {
    size: 'text-3xl',
    weight: 'font-bold',
    component: 'h1',
  },
  header: {
    size: 'text-2xl',
    weight: 'font-semibold',
    component: 'h3',
  },
  subtitle: {
    size: 'text-lg',
    weight: 'font-medium',
    component: 'h6',
  },
  body: {
    size: 'text-base',
    weight: 'font-normal',
    component: 'p',
  },
  description: {
    size: 'text-xs',
    weight: 'font-light',
    component: 'span',
  },
};

export const Typography = ({
  children,
  className = '',
  color = 'secondary',
  variant = 'body',
  component,
}: TypographyProps) => {
  const colorClass = `text-${colorText[color]}-700`;
  const variantClass = `${variantText[variant].size} ${variantText[variant].weight}`;

  const componentDefault = component || variantText[variant].component;

  return <label className={`${colorClass} ${variantClass} ${className}`}>{children}</label>;
};
