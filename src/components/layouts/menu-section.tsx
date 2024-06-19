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
        />
      </div>
    </UISection>
  );
}
