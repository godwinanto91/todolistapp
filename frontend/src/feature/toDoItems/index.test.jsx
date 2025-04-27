import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ToDoItemsContent } from './index';
import { ToDoItemContext } from '../../pages/toDoList';

const mockItems = [
  { id: 1, description: 'Task 1', isCompleted: false }
];

const mockContextValue = {
  setTodoState: jest.fn(),
  items: mockItems,
};

const MockToDoItemProvider = ({ children }) => (
  <ToDoItemContext.Provider value={mockContextValue}>
    {children}
  </ToDoItemContext.Provider>
);

const mockOnItem = jest.fn();

describe('ToDoItemsContent Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correct number of items in table and Refresh button', () => {
    const { getByText } = render(
      <MockToDoItemProvider>
        <ToDoItemsContent handleMarkAsComplete={mockOnItem} handleDelete={mockOnItem} />
      </MockToDoItemProvider>
    );
    expect(getByText('Showing 1 Item(s)')).toBeInTheDocument();
    expect(getByText('Refresh')).toBeInTheDocument();
  });

  it('should call handleMarkAsComplete function when Mark as Complete button in table is clicked', async () => {
    const { getByTestId } = render(
      <MockToDoItemProvider>
        <ToDoItemsContent handleMarkAsComplete={mockOnItem} handleDelete={mockOnItem} />
      </MockToDoItemProvider>
    );
    const completeButton = getByTestId('btn-Mark as completed-1');
    fireEvent.click(completeButton);
    await waitFor(() => {
      expect(mockOnItem).toHaveBeenCalled();
    });
  });

  it('should call handleDelete function when delete button in table is clicked', async () => {
    const { getByTestId } = render(
      <MockToDoItemProvider>
        <ToDoItemsContent handleMarkAsComplete={mockOnItem} handleDelete={mockOnItem} />
      </MockToDoItemProvider>
    );
    const removeButton = getByTestId('btn-Remove-1');
    fireEvent.click(removeButton);
    await waitFor(() => {
      expect(mockOnItem).toHaveBeenCalled();
    });
  });

  it('should call setTodoState when Refresh button is clicked to refresh the table', async () => {
    const { getByTestId } = render(
      <MockToDoItemProvider>
        <ToDoItemsContent handleMarkAsComplete={mockOnItem} handleDelete={mockOnItem} />
      </MockToDoItemProvider>
    );
    const refreshButton = getByTestId('btn-Refresh');
    fireEvent.click(refreshButton);
    await waitFor(() => {
      expect(mockContextValue.setTodoState).toHaveBeenCalled();
    });
  });
});
