import { ComponentProps } from 'react';
import { cva, cx } from 'styled-system/css';

type FloatingBoxProps = ComponentProps<'div'> & {
  type?: 'base' | 'success' | 'warning' | 'danger' | 'information';
};

export function FloatingBox({
  children,
  className,
  type = 'base',
  ...props
}: FloatingBoxProps) {
  return (
    <div className={cx(styles.wrap({ type }), className)} {...props}>
      {children}
    </div>
  );
}

const styles = {
  wrap: cva({
    base: {
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
      rounded: 'md',
    },
    variants: {
      type: {
        base: {
          bg: 'gray.100',
          color: 'gray.800',
        },
        success: {
          bg: 'green.100',
          color: 'green.800',
        },
        warning: {
          bg: 'yellow.100',
          color: 'yellow.800',
        },
        danger: {
          bg: 'red.100',
          color: 'red.800',
        },
        information: {
          bg: 'blue.100',
          color: 'blue.800',
        },
      },
    },
  }),
};
