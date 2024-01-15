import { ComponentProps } from "react"
import { css, cx } from "styled-system/css";

type LinkTextProps = ComponentProps<"a"> & {
  href: string
};

export function LinkText({ children, className, href, ...props }: LinkTextProps) {
  return (
    <a className={cx(styles.wrap, className)} href={href} {...props}>
      {children}
    </a>
  )
}

const styles = {
  wrap: css({
    color: "blue.500",
    textDecoration: "underline",
    _hover: {
      textDecoration: "none"
    }
  })
}
