import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CustomButton } from './index';

describe('CustomButton Component', () => {
  it('renders CustomButton with provided title', () => {
    const { getByText } = render(<CustomButton title="Click Me" />);
    expect(getByText('Click Me')).toBeInTheDocument();
  });

  it('renders CustomButton with provided variant', () => {
    const { getByText } = render(<CustomButton title="Click Me" variant="primary" />);
    expect(getByText('Click Me')).toHaveClass('btn-primary');
  });

  it('should call onClick function when CustomButton is clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<CustomButton title="Click Me" onClick={handleClick} />);
    fireEvent.click(getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders CustomButton with provided size', () => {
    const { getByText } = render(<CustomButton title="Click Me" size="lg" />);
    expect(getByText('Click Me')).toHaveClass('btn-lg');
  });

  it('renders CustomButton as disabled if disabled is true', () => {
    const { getByText } = render(<CustomButton title="Click Me" disabled />);
    expect(getByText('Click Me')).toBeDisabled();
  });
});
