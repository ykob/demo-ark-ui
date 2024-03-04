import { DatePicker } from '@ark-ui/react';
import { mdiCalendar } from '@mdi/js';
import { Icon } from '@mdi/react';
import { css } from 'styled-system/css';
import { InputField, TransparentButton } from '~/components/common';

export function DatePickerControl() {
  return (
    <DatePicker.Control className={styles.wrap}>
      <DatePicker.Input asChild>
        <InputField />
      </DatePicker.Input>
      <DatePicker.Trigger asChild>
        <TransparentButton square>
          <Icon path={mdiCalendar} size={1} />
        </TransparentButton>
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
