import { CustomButton } from "../../components/button";
import { FormField } from "../../components/formField";
import { Title } from "../../components/title";
import { Container, Form, Row, Stack } from "react-bootstrap";
import { useContext } from "react";
import { ToDoItemContext } from "../../pages/toDoList";

/**
 * AddToDoContent Component
 * 
 * @param {function} handleAdd - Function to handle adding a todo item.
 * @returns {JSX.Element} - The JSX element representing the add todo content.
 */
export const AddToDoContent = ({ handleAdd }) => {
  // Using context to access todo state and setter function
  const { setTodoState, ...todoState } = useContext(ToDoItemContext);

  // Handler for description input change
  const handleDescriptionChange = (event) => {
    setTodoState({
      ...todoState,
      description: event.target.value
    });
  };
  // Handler to clear the form
  const handleClear = () => {
    setTodoState(prevState => ({ ...prevState, submitted: true, description: "" }));
  }

  return (
    <Container>
      {/* Title for the add todo section */}
      <Title text="Add Item" />
      {/* Form field for entering description */}
      <FormField
        label="Description"
        type="text"
        placeholder="Enter description..."
        value={todoState.description}
        onChange={handleDescriptionChange}
        isError={todoState.submitted === false && todoState.description === ""}
        controlId="formAddTodoItem"
        helperText="Please enter a description."
      />
      {/* Button group for adding and clearing todo */}
      <Form.Group as={Row} className="mb-1 offset-md-2" controlId="formAddTodoItem">
        <Stack direction="horizontal" gap={2}>
          {/* Button to add todo */}
          <CustomButton variant="primary" onClick={handleAdd} title="Add Item" />
          {/* Button to clear input */}
          <CustomButton variant="secondary" onClick={handleClear} title="Clear" disabled={todoState.description === ""} />
        </Stack>
      </Form.Group>
    </Container>
  );
};