import { ComponentProps } from 'react';
import { css, cx } from 'styled-system/css';

type FloatingBoxProps = ComponentProps<'div'>;

export function FloatingBox({
  children,
  className,
  ...props
}: FloatingBoxProps) {
  return (
    <div className={cx(styles.wrap, className)} {...props}>
      {children}
    </div>
  );
}

const styles = {
  wrap: css({
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    rounded: 'md',
    bg: 'white',
  }),
};
