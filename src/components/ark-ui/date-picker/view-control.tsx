import { DatePicker } from '@ark-ui/react';

export function DatePickerViewControl() {
  return (
    <DatePicker.ViewControl>
      <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
      <DatePicker.ViewTrigger>
        <DatePicker.RangeText />
      </DatePicker.ViewTrigger>
      <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
    </DatePicker.ViewControl>
  );
}
