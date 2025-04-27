import { Table } from "react-bootstrap";
import { CustomButton } from "../button";
import './styles.css';

/**
 * CustomTable Component
 * @param {string[]} columns - An array of column headers.
 * @param {object[]} data - An array of objects representing the data to display in the table.
 * @param {function} handleUpdate - The function to handle updating an item.
 * @param {function} handleRemove - The function to handle removing an item.
 * @returns {JSX.Element} - The JSX element representing the custom table.
 */

export const CustomTable = ({ columns, data, handleUpdate, handleRemove }) => {
    return (
        <Table striped bordered hover className="custom-table">
            <thead>
                <tr>
                    {columns?.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data?.length > 0 ? (
                    data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.description}</td>
                            <td>
                                {item.isCompleted ? (
                                    <CustomButton
                                        variant="success"
                                        size="sm"
                                        disabled={true}
                                        title={"Completed"}
                                        id={item.id}
                                    />
                                ) : (
                                    <CustomButton
                                        variant="warning"
                                        size="sm"
                                        onClick={() => handleUpdate(item)}
                                        title={"Mark as completed"}
                                        id={item.id}
                                    />
                                )}
                            </td>
                            <td>
                                <CustomButton
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleRemove(item)}
                                    title={"Remove"}
                                    id={item.id}
                                >
                                    Remove
                                </CustomButton>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={columns.length} className="text-center">
                            No data to display
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
};
