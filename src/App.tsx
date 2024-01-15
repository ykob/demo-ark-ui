import { CalendarDate } from '@internationalized/date';
import { css, cx } from 'styled-system/css';
import { container, flex } from 'styled-system/patterns';
import { DatePicker } from './components/ark-ui';
import { LinkText, UISection, UISectionHeading } from './components/common';

export default function App() {
  return (
    <div className={cx(container(), styles.container)}>
      <header>
        <h1 className={styles.heading}>Demo for Ark UI</h1>
        <ul>
          <li>
            <LinkText href="https://ark-ui.com/" target="_blank">
              Ark UI
            </LinkText>
          </li>
        </ul>
      </header>
      <UISection>
        <UISectionHeading>DatePicker</UISectionHeading>
        <div className={cx(css({ flex: 1, gap: 4 }), flex())}>
          <DatePicker locale="ja-JP" />
          <DatePicker locale="ja-JP" defaultValue={['2024-01-10']} />
          <DatePicker
            locale="ja-JP"
            min={new CalendarDate(2020, 1, 1)}
            max={new CalendarDate(2030, 1, 1)}
          />
          <DatePicker />
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
  heading: css({
    fontSize: '4xl',
  }),
};
