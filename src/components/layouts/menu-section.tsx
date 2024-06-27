import { Menu as ArkMenu } from '@ark-ui/react';
import { css } from 'styled-system/css';
import { Menu } from '~/components/ark-ui';
import {
  MenuItem,
  TransparentButton,
  UISection,
  UISectionHeading,
} from '~/components/common';

export function MenuSection() {
  return (
    <UISection>
      <UISectionHeading>Menu</UISectionHeading>
      <div>
        <Menu
          renderTrigger={<TransparentButton>Open Menu</TransparentButton>}
          renderContent={
            <div className={styles.content}>
              <ArkMenu.Item asChild value="react">
                <MenuItem>React</MenuItem>
              </ArkMenu.Item>
              <ArkMenu.Item asChild value="solid">
                <MenuItem>Solid</MenuItem>
              </ArkMenu.Item>
              <ArkMenu.Item asChild value="vue">
                <MenuItem>Vue</MenuItem>
              </ArkMenu.Item>
              <ArkMenu.Item asChild value="hyperlink">
                <MenuItem asChild>
                  <a href="https://ark-ui.com/" target="_blank">
                    Hyperlink
                  </a>
                </MenuItem>
              </ArkMenu.Item>
            </div>
          }
          onSelect={(value) => console.log(value)}
        />
      </div>
    </UISection>
  );
}

const styles = {
  content: css({
    py: 2,
  }),
};
