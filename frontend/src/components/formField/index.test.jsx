import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormField } from './index';

const onChangeMock = jest.fn();

describe('FormField component', () => {
  beforeEach(() => {
    render(
      <FormField
        type="text"
        label="Name"
        placeholder="Enter your name"
        isError={false}
        value=""
        controlId="formName"
        helperText="Please enter your name."
        onChange={onChangeMock}
      />
    );
  });

  it('renders label and placeholder text correctly', () => {
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your name/i)).toBeInTheDocument();
  });

  it('renders error message for the text when isError is true', () => {
    render(
      <FormField
        type="text"
        label="Name"
        placeholder="Enter your name"
        isError={true}
        value=""
        controlId="formName"
        helperText="Please enter your name."
        onChange={() => { }}
      />
    );
    expect(screen.getByText(/Please enter your name/i)).toBeInTheDocument();
  });

  it('triggers onChange event if there is any change in text field', async () => {
    const inputField = screen.getByPlaceholderText(/Enter your name/i);
    fireEvent.change(inputField, { target: { value: 'John' } });
    expect(onChangeMock).toHaveBeenCalled();
  });
});
