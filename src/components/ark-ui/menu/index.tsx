import { Menu, Portal } from '@ark-ui/react';
import { ComponentProps, ReactNode, RefAttributes, RefObject } from 'react';
import { FloatingBox } from '~/components/common';

type ArkMenuProps = RefAttributes<HTMLDivElement> & {
  portalContainer?: RefObject<HTMLElement>;
  renderContent: ReactNode;
  renderTrigger: ReactNode;
} & ComponentProps<typeof Menu.Root>;

export function ArkMenu({
  portalContainer,
  renderContent,
  renderTrigger,
  ...props
}: ArkMenuProps) {
  return (
    <Menu.Root {...props}>
      <Menu.Trigger>{renderTrigger}</Menu.Trigger>
      <Portal container={portalContainer}>
        <Menu.Positioner>
          <Menu.Content asChild>
            <FloatingBox>{renderContent}</FloatingBox>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
