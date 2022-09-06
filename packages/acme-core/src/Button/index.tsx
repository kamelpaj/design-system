import * as React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

export interface ButtonProps {
  children: React.ReactNode;
  brand: "brand-1" | "brand-2" | "brand-3";
}

let cx = classNames.bind(styles);

export function Button(props: ButtonProps) {
  let className = cx({
    base: true,
    [props.brand]: true
  });
  return <button className={className}>{props.children}</button>;
}

Button.displayName = "Button";
