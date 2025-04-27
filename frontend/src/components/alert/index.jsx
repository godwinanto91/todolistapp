import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import "./styles.css";

/**
 * AlertBox Component
 * @param {string} title - The title of the alert.
 * @param {string} message - The message to be displayed in the alert.
 * @param {boolean} [isDismissible=true] - Flag indicating whether the alert can be dismissed.
 * @param {string} variant - The variant of the alert (e.g., "primary", "success", "warning", "danger").
 * @returns {JSX.Element} - The JSX element representing the alert box.
 */

export const AlertBox = ({ title, message, isDismissible = true, variant }) => {
  const [show, setShow] = useState(true);
  // Alert Box will close after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="alert-box">
      {show && <Alert
        className="alert-box__custom"
        variant={variant}
        onClose={() => (setShow(false))}
        dismissible={isDismissible}
        data-testid={`alert-${title}`}
      >
        <Alert.Heading className="alert-box__title">{title}</Alert.Heading>
        <p>{message}</p>
      </Alert>
      }
    </div>
  );
};
