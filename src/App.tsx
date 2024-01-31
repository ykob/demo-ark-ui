import { css, cx } from 'styled-system/css';
import { container } from 'styled-system/patterns';
import {
  ComboboxSection,
  DatePickerSection,
  PageHeader,
} from '~/components/layouts';

export default function App() {
  return (
    <div className={cx(container(), styles.container)}>
      <PageHeader />
      <ComboboxSection />
      <DatePickerSection />
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
