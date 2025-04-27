import React from "react";
import { Spinner } from "react-bootstrap";
import "./styles.css";

export const CustomSpinner = ({ srText }) => {
  return (
    <div className="spinner-overlay">
      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only">{srText}</span>
      </Spinner>
    </div>
  );
};
