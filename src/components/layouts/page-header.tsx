import { LinkText } from '@/components/common';
import { css } from 'styled-system/css';

export function PageHeader() {
  return (
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
  );
}

const styles = {
  heading: css({
    fontSize: '4xl',
  }),
};
