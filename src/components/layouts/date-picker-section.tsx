import { CalendarDate } from '@internationalized/date';
import { useRef } from 'react';
import { css, cx } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import { DatePicker } from '~/components/ark-ui';
import { UISection, UISectionHeading } from '~/components/common';

export function DatePickerSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <UISection>
      <UISectionHeading>DatePicker</UISectionHeading>
      <div className={cx(css({ flex: 1, gap: 4 }), flex())} ref={ref}>
        <DatePicker portalContainer={ref} locale="ja-JP" />
        <DatePicker
          portalContainer={ref}
          locale="ja-JP"
          defaultValue={['2024-01-10']}
        />
        <DatePicker
          portalContainer={ref}
          locale="ja-JP"
          min={new CalendarDate(2020, 1, 1)}
          max={new CalendarDate(2030, 1, 1)}
        />
        <DatePicker portalContainer={ref} />
      </div>
    </UISection>
  );
}
