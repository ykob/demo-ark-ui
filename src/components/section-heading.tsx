import { ComponentProps } from "react";
import { css, cx } from "styled-system/css";

type SectionHeadingProps = ComponentProps<"h2">;

export function SectionHeading({
  children,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <h2 className={cx(styles.wrap, className)} {...props}>
      {children}
    </h2>
  );
}

const styles = {
  wrap: css({
    fontSize: "2xl",
  }),
};
