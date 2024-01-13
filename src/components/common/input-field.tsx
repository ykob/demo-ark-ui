import { ComponentProps } from 'react';
import { css, cx } from 'styled-system/css';

type InputFieldProps = ComponentProps<'input'>;

export function InputField({
  className,
  type = 'text',
  ...props
}: InputFieldProps) {
  return (
    <input type={type} {...props} className={cx(styles.wrap, className)} />
  );
}

const styles = {
  wrap: css({
    boxSizing: 'border-box',
    width: '100%',
    height: '2em',
    px: 2,
    border: '1px solid',
    rounded: 'sm',
  }),
};
