import React from "react";
import Button from "react-bootstrap/Button";
import { BsArrowRepeat } from "react-icons/bs";
import styles from './LoaderButton.module.css';

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      disabled={disabled || isLoading}
      className={`${styles.LoaderButton} ${className}`}
      {...props}
    >
      {isLoading && <BsArrowRepeat className={`${styles.spinning}`} />}
      {props.children}
    </Button>
  );
}