import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CustomTable } from './index';

describe('CustomTable component', () => {
  const columns = ['ID', 'Description', 'Action', 'Delete'];
  const data = [{ id: 1, description: 'Task 1', isCompleted: false }];
  const handleUpdate = jest.fn();
  const handleRemove = jest.fn();

  beforeEach(() => {
    render(
      <CustomTable
        columns={columns}
        data={data}
        handleUpdate={handleUpdate}
        handleRemove={handleRemove}
      />
    );
  });

  it('renders CustomTable component correctly with provided column and data', () => {
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Mark as completed')).toBeInTheDocument();
    expect(screen.getByText('Remove')).toBeInTheDocument();
  });

  it('should call handleUpdate and handleRemove correctly on click of Mark as completed and Remove button respectively', () => {
    const markAsCompletedButton = screen.getByText('Mark as completed');
    fireEvent.click(markAsCompletedButton);
    expect(handleUpdate).toHaveBeenCalledTimes(1);
    expect(handleUpdate).toHaveBeenCalledWith(data[0]);
    const removeButton = screen.getByTestId('btn-Remove-1');
    fireEvent.click(removeButton);
    expect(handleRemove).toHaveBeenCalledTimes(1);
    expect(handleRemove).toHaveBeenCalledWith(data[0]);
  });
});
