import {
  Children,
  cloneElement,
  isValidElement,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { cx } from 'styled-system/css';

export type AsChildProps<T> =
  | ({ asChild?: false | undefined } & T)
  | { asChild: true; children: ReactNode };

type SlotProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
};

function Slot({ children, className, style, ...props }: SlotProps) {
  if (isValidElement(children)) {
    return cloneElement(children, {
      ...props,
      ...children.props,
      style: {
        ...style,
        ...children.props.style,
      },
      className: cx(className, children.props.className),
    });
  }
  if (Children.count(children) > 1) {
    Children.only(null);
  }
  return null;
}

export function ComponentAsChild(
  asChild: boolean | undefined,
  element: string = 'div',
) {
  return asChild ? Slot : element;
}
