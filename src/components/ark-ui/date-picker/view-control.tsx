import { TransparentButton } from '@/components/common';
import { DatePicker } from '@ark-ui/react';
import { css } from 'styled-system/css';

export function DatePickerViewControl() {
  return (
    <DatePicker.ViewControl className={styles.wrap}>
      <DatePicker.PrevTrigger asChild>
        <TransparentButton square>&lt;</TransparentButton>
      </DatePicker.PrevTrigger>
      <DatePicker.ViewTrigger asChild>
        <TransparentButton>
          <DatePicker.RangeText />
        </TransparentButton>
      </DatePicker.ViewTrigger>
      <DatePicker.NextTrigger asChild>
        <TransparentButton square>&gt;</TransparentButton>
      </DatePicker.NextTrigger>
    </DatePicker.ViewControl>
  );
}

const styles = {
  wrap: css({
    display: 'flex',
    justifyContent: 'space-between',
  }),
};
