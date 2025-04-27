import React from 'react';
import { render } from '@testing-library/react';
import { Title } from './index';

describe('Title Component', () => {
  it('renders title component with provided text', () => {
    const { getByText } = render(<Title text="Hello, World!" />);
    expect(getByText('Hello, World!')).toBeInTheDocument();
  });
  it('renders title component as h1', () => {
    const { container } = render(<Title text="Hello, World!" />);
    expect(container.querySelector('h1')).toBeInTheDocument();
  });
});
