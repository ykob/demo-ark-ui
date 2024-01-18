import { ComponentProps } from 'react';
import { cva, cx } from 'styled-system/css';

type TransparentButtonProps = ComponentProps<'button'> & {
  buttonSize?: 'sm' | 'md' | 'lg';
  square?: boolean;
};

export function TransparentButton({
  buttonSize = 'md',
  square = false,
  className = 'md',
  children,
  ...props
}: TransparentButtonProps) {
  return (
    <button
      className={cx(styles.wrap({ buttonSize, square }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

const styles = {
  wrap: cva({
    base: {
      boxSizing: 'border-box',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      rounded: 'lg',
      transition: 'background-color 0.2s',
      bg: 'transparent',
      _hover: {
        bg: 'blue.200',
      },
      _active: {
        bg: 'blue.300',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      '[aria-disabled] &': {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
    },
    variants: {
      buttonSize: {
        sm: {
          fontSize: 'sm',
          h: 6,
        },
        md: {
          fontSize: 'md',
          h: 8,
        },
        lg: {
          fontSize: 'lg',
          h: 10,
        },
      },
      square: {
        true: {
          w: 8,
          px: 0,
        },
        false: {
          w: 'fit-content',
          px: 2,
        },
      },
    },
    compoundVariants: [
      {
        square: true,
        buttonSize: 'sm',
        css: {
          w: 6,
        },
      },
      {
        square: true,
        buttonSize: 'md',
        css: {
          w: 8,
        },
      },
      {
        square: true,
        buttonSize: 'lg',
        css: {
          w: 10,
        },
      },
    ],
  }),
};
