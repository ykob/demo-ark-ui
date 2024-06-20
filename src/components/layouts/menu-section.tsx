import { Menu as ArkMenu } from '@ark-ui/react';
import { css } from 'styled-system/css';
import { Menu } from '~/components/ark-ui';
import {
  TransparentButton,
  UISection,
  UISectionHeading,
} from '~/components/common';

export function MenuSection() {
  return (
    <UISection>
      <UISectionHeading>Toast</UISectionHeading>
      <div>
        <Menu
          renderTrigger={<TransparentButton>Open Menu</TransparentButton>}
          renderContent={
            <div className={styles.content}>
              <ArkMenu.Item value="react">React</ArkMenu.Item>
              <ArkMenu.Item value="solid">Solid</ArkMenu.Item>
              <ArkMenu.Item value="vue">Vue</ArkMenu.Item>
              <ArkMenu.Item value="hyperlink" asChild>
                <a href="https://ark-ui.com/" target="_blank">
                  Hyperlink
                </a>
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
    p: 4,
  }),
};
