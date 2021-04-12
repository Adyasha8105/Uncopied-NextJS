import React from "react";
import Button from "react-bootstrap/Button";
import "./LoadingButton.module.css"
import { BsArrowRepeat } from "react-icons/bs";


export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      disabled={disabled || isLoading}
      className={`LoaderButton ${className}`}
      {...props}
    >
      {isLoading && <BsArrowRepeat className="spinning" />}
      {props.children}
    </Button>
  );
}
