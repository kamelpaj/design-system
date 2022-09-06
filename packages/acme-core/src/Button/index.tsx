import * as React from "react";
import styles  from "./Button.module.scss";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className={styles.btn}>{props.children}</button>;
}

Button.displayName = "Button";
