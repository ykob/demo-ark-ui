import { DatePicker } from '@ark-ui/react/date-picker';
import { css } from 'styled-system/css';
import { TransparentButton } from '~/components/common';

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
