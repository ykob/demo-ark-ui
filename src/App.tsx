import { DatePicker } from '@/components/ark-ui';
import { UISection, UISectionHeading } from '@/components/common';
import { PageHeader } from '@/components/layouts';
import { useRef } from 'react';
import { CalendarDate } from '@internationalized/date';
import { css, cx } from 'styled-system/css';
import { container, flex } from 'styled-system/patterns';

export default function App() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={cx(container(), styles.container)}>
      <PageHeader />
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
    </div>
  );
}

const styles = {
  container: css({
    display: 'flex',
    flexDir: 'column',
    gap: 10,
    py: 16,
  }),
};
