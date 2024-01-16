import { FloatingBox } from '@/components/common';
import { RefObject } from 'react';
import { DatePicker, type DatePickerProps, Portal } from '@ark-ui/react';
import { css, cx } from 'styled-system/css';
import { DatePickerControl } from './control';
import { DatePickerDayView } from './day-view';
import { DatePickerMonthView } from './month-view';
import { DatePickerYearView } from './year-view';

type ArkDatePickerProps = DatePickerProps &
  React.RefAttributes<HTMLDivElement> & {
    portalContainer?: RefObject<HTMLElement>;
  };

export const ArkDatePicker = ({
  className,
  portalContainer,
  ...props
}: ArkDatePickerProps) => {
  return (
    <DatePicker.Root className={cx(styles.wrap, className)} {...props}>
      <DatePickerControl />
      <Portal container={portalContainer}>
        <DatePicker.Positioner>
          <DatePicker.Content>
            <FloatingBox>
              <DatePickerDayView />
              <DatePickerMonthView />
              <DatePickerYearView />
            </FloatingBox>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  );
};

const styles = {
  wrap: css({
    height: '2em',
    position: 'relative',
  }),
};
