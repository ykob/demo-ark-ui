import { ComponentProps } from 'react';
import { css } from 'styled-system/css';

export function MenuItem({ children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={style} {...props}>
      {children}
    </div>
  );
}

const style = css({
  py: 2,
  px: 4,
  cursor: 'pointer',
  _hover: {
    bgColor: 'blue.200',
  },
  _highlighted: {
    bgColor: 'blue.200',
  },
});
