import * as React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { BsArrowRight } from "react-icons/bs";

export interface ButtonProps {
  label: string;
  // brand: "brand-1" | "brand-2" | "brand-3";
  withArrow: boolean;
  colorScheme: "main" | "women" | "men" | "familyCarer";
}

let cx = classNames.bind(styles);

export function Button(props: ButtonProps) {
  const { label, colorScheme, withArrow } = props;

  let className = cx({
    base: true,
    [colorScheme]: true,
  });
  return (
    <button className={className}>
      {label} {withArrow && <BsArrowRight />}
    </button>
  );
}

Button.displayName = "Button";
