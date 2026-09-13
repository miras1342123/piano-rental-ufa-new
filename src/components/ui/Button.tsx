import React from 'react';

type CommonButtonProps = {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

type ButtonProps =
  | (CommonButtonProps & {
      href: string;
      target?: React.HTMLAttributeAnchorTarget;
      rel?: string;
      onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel' | 'onClick' | 'children' | 'className'>)
  | (CommonButtonProps & {
      href?: never;
    } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'>);

export default function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    icon,
    children,
    className = '',
  } = props;

  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-full whitespace-nowrap transition-all duration-300 ease-premium focus:outline-none focus:ring-2 focus:ring-brass/50 disabled:opacity-50';

  const variants = {
    primary:
      'btn-shine bg-brass text-white hover:bg-brass/95 shadow-sm hover:shadow-lg hover:shadow-brass/30 hover:-translate-y-0.5 active:scale-95 active:translate-y-0',
    outline:
      'border-2 border-graphite/20 text-graphite hover:border-brass hover:text-brass hover:bg-brass/5 hover:-translate-y-0.5 active:scale-95 active:translate-y-0',
    ghost:
      'text-graphite/70 hover:text-brass hover:bg-brass/5 active:scale-95',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ('href' in props && props.href) {
    const { href, target, rel, onClick, ...anchorProps } = props;
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={classes}
        {...anchorProps}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </a>
    );
  }

  const { href: _href, ...buttonProps } = props as CommonButtonProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

  return (
    <button className={classes} {...buttonProps}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
