import { Combobox, Portal, type ComboboxProps } from '@ark-ui/react';
import React, { RefObject } from 'react';
import { css, cx } from 'styled-system/css';
import { FloatingBox, InputField } from '~/components/common';

type ArkComboboxProps = ComboboxProps<{
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
      <Combobox.Control>
        <Combobox.Input asChild>
          <InputField />
        </Combobox.Input>
        <Combobox.Trigger>Open</Combobox.Trigger>
        <Combobox.ClearTrigger>Clear</Combobox.ClearTrigger>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <FloatingBox>
              <Combobox.ItemGroup id="framework">
                <Combobox.ItemGroupLabel htmlFor="framework">
                  Frameworks
                </Combobox.ItemGroupLabel>
                {items.map((item) => (
                  <Combobox.Item key={item.value} item={item}>
                    <Combobox.ItemText>{item.label}</Combobox.ItemText>
                    <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
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
    height: '2em',
    position: 'relative',
  }),
};
