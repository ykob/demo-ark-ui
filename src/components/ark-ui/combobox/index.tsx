import { Combobox, Portal, type ComboboxRootProps } from '@ark-ui/react';
import { mdiCheck, mdiChevronDown, mdiClose } from '@mdi/js';
import { Icon } from '@mdi/react';
import React, { RefObject } from 'react';
import { css, cx } from 'styled-system/css';
import { FloatingBox, InputField } from '~/components/common';
import { TransparentButton } from '../../common/transparent-button';

type ArkComboboxProps = ComboboxRootProps<{
  label: string;
  value: string;
}> &
  React.RefAttributes<HTMLDivElement> & {
    portalContainer?: RefObject<HTMLElement>;
  };

export const ArkCombobox = ({
  items,
  className,
  portalContainer,
  ...props
}: ArkComboboxProps) => {
  return (
    <Combobox.Root
      className={cx(styles.wrap, className)}
      items={items}
      {...props}
    >
      <Combobox.Label>Framework</Combobox.Label>
      <Combobox.Control className={styles.control}>
        <Combobox.Input asChild>
          <InputField />
        </Combobox.Input>
        <Combobox.Trigger asChild>
          <TransparentButton square>
            <Icon path={mdiChevronDown} size={1} />
          </TransparentButton>
        </Combobox.Trigger>
        <Combobox.ClearTrigger asChild>
          <TransparentButton square>
            <Icon path={mdiClose} size={1} />
          </TransparentButton>
        </Combobox.ClearTrigger>
      </Combobox.Control>
      <Portal container={portalContainer}>
        <Combobox.Positioner>
          <Combobox.Content>
            <FloatingBox>
              <Combobox.ItemGroup id="framework">
                <Combobox.ItemGroupLabel htmlFor="framework">
                  Frameworks
                </Combobox.ItemGroupLabel>
                {items.map((item) => (
                  <Combobox.Item
                    key={item.value}
                    item={item}
                    className={styles.item}
                  >
                    <Combobox.ItemText>{item.label}</Combobox.ItemText>
                    <Combobox.ItemIndicator>
                      <Icon path={mdiCheck} size={0.8} />
                    </Combobox.ItemIndicator>
                  </Combobox.Item>
                ))}
              </Combobox.ItemGroup>
            </FloatingBox>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
};

const styles = {
  wrap: css({
    position: 'relative',
  }),
  control: css({
    display: 'flex',
    gap: 1,
  }),
  item: css({
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    py: 1,
    px: 2,
    _hover: {
      bg: 'blue.200',
    },
    _checked: {
      bg: 'blue.300',
    },
    _disabled: {
      color: 'gray.300',
    },
    _highlighted: {
      bg: 'blue.200',
    },
  }),
};
