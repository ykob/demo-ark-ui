import { ComponentProps } from "react";
import { css, cx } from "styled-system/css";

type UISectionProps = ComponentProps<"section">;

export function UISection({ children, className, ...props }: UISectionProps) {
  return (
    <section className={cx(styles.wrap, className)} {...props}>
      {children}
    </section>
  );
}

const styles = {
  wrap: css({
    display: "flex",
    flexDir: "column",
    gap: 3,
  }),
};
