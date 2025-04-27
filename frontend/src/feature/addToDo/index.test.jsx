import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { AddToDoContent } from './index';
import { ToDoItemContext } from '../../pages/toDoList';

const mockContextValue = {
  setTodoState: jest.fn(),
  description: "",
};

const MockToDoItemProvider = ({ children }) => (
  <ToDoItemContext.Provider value={mockContextValue}>
    {children}
  </ToDoItemContext.Provider>
);

const mockOnAddItem = jest.fn();

describe('AddToDoContent Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render AddToDoContent component', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <MockToDoItemProvider>
        <AddToDoContent handleAdd={mockOnAddItem} />
      </MockToDoItemProvider>
    );

    const addButton = getByTestId('btn-Add Item');
    expect(addButton).toBeInTheDocument();
    expect(getByPlaceholderText('Enter description...')).toBeInTheDocument();
  });

  it('should handle input change', async () => {
    const { getByPlaceholderText } = render(
      <MockToDoItemProvider>
        <AddToDoContent handleAdd={mockOnAddItem} />
      </MockToDoItemProvider>
    );
    const inputElement = getByPlaceholderText('Enter description...');
    fireEvent.change(inputElement, { target: { value: 'Test description' } });
    await waitFor(() => {
      expect(mockContextValue.setTodoState).toHaveBeenCalledWith({
        description: 'Test description'
      });
    });
  });

  it('should call postApiRequest function on Add Item button click with valid description', async () => {
    const { getByTestId, getByPlaceholderText } = render(
      <MockToDoItemProvider>
        <AddToDoContent handleAdd={mockOnAddItem} />
      </MockToDoItemProvider>
    );
    const addButton = getByTestId('btn-Add Item');
    const inputElement = getByPlaceholderText('Enter description...');
    fireEvent.change(inputElement, { target: { value: 'Test description' } });
    fireEvent.click(addButton);
    await waitFor(() => {
      expect(mockOnAddItem).toHaveBeenCalled();
    });
  });

  it('should clear description on Clear button click', async () => {
    const { getByTestId, getByPlaceholderText } = render(
      <MockToDoItemProvider>
        <AddToDoContent handleAdd={mockOnAddItem} />
      </MockToDoItemProvider>
    );
    const inputElement = getByPlaceholderText('Enter description...');
    fireEvent.input(inputElement, { target: { value: "Test" } });
    const clearButton = getByTestId('btn-Clear');
    fireEvent.click(clearButton);
    await waitFor(() => {
      expect(mockContextValue.setTodoState).toHaveBeenCalled();
      expect(inputElement.value).toBe("");
    });
  });


});
