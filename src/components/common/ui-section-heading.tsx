import { ComponentProps } from 'react';
import { css, cx } from 'styled-system/css';

type UISectionHeadingProps = ComponentProps<'h2'>;

export function UISectionHeading({
  children,
  className,
  ...props
}: UISectionHeadingProps) {
  return (
    <h2 className={cx(styles.wrap, className)} {...props}>
      {children}
    </h2>
  );
}

const styles = {
  wrap: css({
    fontSize: '2xl',
  }),
};
