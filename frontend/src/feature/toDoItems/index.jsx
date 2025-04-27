import { useContext } from "react";
import { CustomButton } from "../../components/button";
import { CustomTable } from "../../components/table";
import { ToDoItemContext } from "../../pages/toDoList";
import './styles.css';
/**
 * ToDoItemsContent Component
 * 
 * @param {function} handleMarkAsComplete - Function to handle marking an item as complete.
 * @param {function} handleDelete - Function to handle deleting an item.
 * @returns {JSX.Element} - The JSX element representing the todo items content.
 */
export const ToDoItemsContent = ({ handleMarkAsComplete, handleDelete }) => {
  // Accessing todo state and setter function from context
  const { setTodoState, ...todoState } = useContext(ToDoItemContext)
  return (
    <>
      <h1 className="title">
        {/* Displaying the count of items */}
        Showing {todoState.items?.length} Item(s){' '}
        {/* Button to refresh the list */}
        {todoState.items?.length > 0 &&
          <CustomButton
            variant="primary"
            className="pull-right"
            onClick={() => setTodoState(prevState => ({ ...prevState, refetch: !prevState.refetch }))}
            title={"Refresh"} />}
      </h1>
      {/* Displaying the todo items in a table */}
      <CustomTable
        columns={["Id", "Description", "Action", "Remove"]}
        data={todoState.items}
        handleUpdate={handleMarkAsComplete}
        handleRemove={handleDelete}
      />
    </>
  );
};