import { useRef } from 'react';
import { css, cx } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import { Combobox } from '~/components/ark-ui';
import { UISection, UISectionHeading } from '~/components/common';

export function ComboboxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const items = [
    { label: 'React', value: 'react' },
    { label: 'Solid', value: 'solid' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte', disabled: true },
  ];

  return (
    <UISection>
      <UISectionHeading>Combobox</UISectionHeading>
      <div className={cx(css({ flex: 1, gap: 4 }), flex())} ref={ref}>
        <Combobox items={items} />
      </div>
    </UISection>
  );
}
