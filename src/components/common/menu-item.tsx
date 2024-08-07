import { ComponentProps } from 'react';
import { css } from 'styled-system/css';
import { AsChildProps, ComponentAsChild } from '~/components/utils';

type MenuItemProps = AsChildProps<ComponentProps<'div'>>;

export function MenuItem({ asChild, children, ...props }: MenuItemProps) {
  const Component = ComponentAsChild(asChild, 'div');

  return (
    <Component className={style} {...props}>
      {children}
    </Component>
  );
}

const style = css({
  w: '100%',
  boxSizing: 'border-box',
  display: 'block',
  py: 2,
  px: 4,
  cursor: 'pointer',
  textAlign: 'left',
  _hover: {
    bgColor: 'blue.200',
  },
  _highlighted: {
    bgColor: 'blue.200',
  },
  _disabled: {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
});
