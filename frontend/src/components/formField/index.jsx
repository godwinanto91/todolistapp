import { Col, Form, Row } from "react-bootstrap";
import './styles.css'

/**
 * FormField Component
 * @param {string} type - The type of input field (e.g., "text", "password", "email").
 * @param {string} label - The label for the input field.
 * @param {string} placeholder - The placeholder text for the input field.
 * @param {boolean} isError - Flag indicating whether there is an error with the input.
 * @param {string} value - The value of the input field.
 * @param {string} controlId - The ID of the form control.
 * @param {string} helperText - The helper text to display when there is an error.
 * @param {function} onChange - The function to be called when the input value changes.
 * @returns {JSX.Element} - The JSX element representing the form field.
 */

export const FormField = ({ type, label, placeholder, isError, value, controlId, helperText, onChange }) => {
  return (
    <div className="form-field">
      <Form.Group as={Row} className="mb-1" controlId={controlId}>
        <Form.Label column sm="2">
          {label}
        </Form.Label>
        <Col md={6}>
          <Form.Control
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={isError ? "red-highlight" : ""} />
          {isError && <Form.Text className="text-danger">{helperText}</Form.Text>}

        </Col>
      </Form.Group>
    </div>
  );
}