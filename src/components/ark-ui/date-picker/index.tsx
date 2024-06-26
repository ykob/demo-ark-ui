import { DatePicker, Portal, type DatePickerRootProps } from '@ark-ui/react';
import { RefObject } from 'react';
import { css, cx } from 'styled-system/css';
import { FloatingBox } from '~/components/common';
import { DatePickerControl } from './control';
import { DatePickerDayView } from './day-view';
import { DatePickerMonthView } from './month-view';
import { DatePickerYearView } from './year-view';

type ArkDatePickerProps = DatePickerRootProps &
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
            <FloatingBox className={styles.content}>
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
  content: css({
    p: 4,
  }),
};
