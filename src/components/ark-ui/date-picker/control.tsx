import { InputField } from '@/components/common';
import { TransparentButton } from '@/components/common';
import { DatePicker } from '@ark-ui/react';
import { css } from 'styled-system/css';

export function DatePickerControl() {
  return (
    <DatePicker.Control className={styles.wrap}>
      <DatePicker.Input asChild>
        <InputField />
      </DatePicker.Input>
      <DatePicker.Trigger asChild>
        <TransparentButton square>📅</TransparentButton>
      </DatePicker.Trigger>
    </DatePicker.Control>
  );
}

const styles = {
  wrap: css({
    display: 'flex',
    gap: 1,
  }),
};
