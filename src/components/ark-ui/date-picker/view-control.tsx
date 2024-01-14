import { DatePicker } from '@ark-ui/react';
import { css } from 'styled-system/css';

export function DatePickerViewControl() {
  return (
    <DatePicker.ViewControl className={styles.wrap}>
      <DatePicker.PrevTrigger>&lt;</DatePicker.PrevTrigger>
      <DatePicker.ViewTrigger>
        <DatePicker.RangeText />
      </DatePicker.ViewTrigger>
      <DatePicker.NextTrigger>&gt;</DatePicker.NextTrigger>
    </DatePicker.ViewControl>
  );
}

const styles = {
  wrap: css({
    display: 'flex',
    justifyContent: 'space-between',
  }),
};
