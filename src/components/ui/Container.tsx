import React from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  size?: 'default' | 'narrow' | 'wide';
}

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
  size = 'default',
  ...props
}) => {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1440px]',
  };

  return (
    <div
      className={cn('mx-auto px-4 sm:px-6 lg:px-8 w-full', sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};
