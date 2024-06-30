import { ComponentProps } from 'react';
import { css } from 'styled-system/css';

type MenuItemHeadingProps = ComponentProps<'div'>;

export function MenuItemHeading({ children, ...props }: MenuItemHeadingProps) {
  return (
    <div className={style} {...props}>
      {children}
    </div>
  );
}

const style = css({
  display: 'block',
  py: 1,
  px: 4,
  cursor: 'pointer',
  bgColor: 'gray.200',
});
