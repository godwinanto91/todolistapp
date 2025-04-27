import { Button } from "react-bootstrap";
import './styles.css';

/**
 * CustomButton Component
 * @param {string} variant - The variant of the button (e.g., "primary", "secondary", "success").
 * @param {string} className - Additional classes to apply to the button.
 * @param {function} onClick - The function to be called when the button is clicked.
 * @param {string} title - The text displayed on the button.
 * @param {string} size - The size of the button (e.g., "sm", "lg").
 * @param {boolean} disabled - Flag indicating whether the button is disabled.
 * @param {string} id - The unique identifier for the button.
 * @returns {JSX.Element} - The JSX element representing the custom button.
 */

export const CustomButton = ({ variant, className, onClick, title, size, disabled, id }) => {
  return (
    <Button
      variant={variant}
      className="custom-button"
      disabled={disabled}
      onClick={onClick}
      size={size}
      data-testid={id ? `btn-${title}-${id}` : `btn-${title}`}
    >
      {title}
    </Button>
  );
}