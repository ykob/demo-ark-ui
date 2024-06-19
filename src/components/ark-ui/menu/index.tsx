import { Menu, Portal } from '@ark-ui/react';
import { RefObject } from 'react';

type ArkMenuProps = {
  renderTrigger: React.ReactNode;
} & React.RefAttributes<HTMLDivElement> & {
    portalContainer?: RefObject<HTMLElement>;
  };

export function ArkMenu({ portalContainer, renderTrigger }: ArkMenuProps) {
  return (
    <Menu.Root>
      <Menu.Trigger>{renderTrigger}</Menu.Trigger>
      <Portal container={portalContainer}>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="react">React</Menu.Item>
            <Menu.Item value="solid">Solid</Menu.Item>
            <Menu.Item value="vue">Vue</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
