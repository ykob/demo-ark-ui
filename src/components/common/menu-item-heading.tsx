import { ComponentProps } from 'react';
import { css } from 'styled-system/css';
import { AsChildProps, Slot } from '~/components/utils/slot';

type MenuItemHeadingProps = AsChildProps<ComponentProps<'div'>>;

export function MenuItemHeading({
  asChild,
  children,
  ...props
}: MenuItemHeadingProps) {
  const Component = asChild ? Slot : 'div';

  return (
    <Component className={style} {...props}>
      {children}
    </Component>
  );
}

const style = css({
  display: 'block',
  py: 1,
  px: 4,
  cursor: 'pointer',
  bgColor: 'gray.200',
});
