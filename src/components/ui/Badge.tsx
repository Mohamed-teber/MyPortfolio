import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'accent' | 'outline' | 'subtle';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'neutral',
  size = 'sm',
  children,
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5 rounded-md',
    md: 'text-sm px-3 py-1 rounded-md',
  };

  const variantClasses = {
    neutral: 'bg-slate-900/80 text-slate-300 border border-slate-800 font-mono text-[11px]',
    accent: 'bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 font-mono text-[11px]',
    outline: 'border border-slate-700/80 text-slate-300 font-medium',
    subtle: 'text-slate-400 font-medium',
  };

  return (
    <span
      className={cn('inline-flex items-center font-medium whitespace-nowrap', sizeClasses[size], variantClasses[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};
