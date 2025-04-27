
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { AlertBox } from './index';

describe('AlertBox Component', () => {
  describe.each([
    ['Error', 'An error occurred.', undefined],
    ['Info', 'Information message.', 'info'],
    ['Warning', 'Warning message.', undefined],
    ['Success', 'Success message.', undefined],
  ])('renders alert component with provided title and message', (title, message, variant) => {
    it(`renders ${title} alert box`, () => {
      const { getByText } = render(<AlertBox title={title} message={message} variant={variant} />);
      expect(getByText(title)).toBeInTheDocument();
      expect(getByText(message)).toBeInTheDocument();
    });
  });

  it('alert should disappear after if user clicks on close icon if is isDismissible is true', async () => {
    const { getByLabelText, queryByText } = render(<AlertBox title="Warning" message="Warning message." />);
    expect(queryByText('Warning')).toBeInTheDocument();
    const closeButton = getByLabelText('Close alert');
    fireEvent.click(closeButton);
    await waitFor(() => {
      expect(queryByText('Warning')).not.toBeInTheDocument();
    });
  });

  it('alert should auto-disappear after 5sec', async () => {
    jest.useFakeTimers();
    const { getByLabelText, queryByText } = render(<AlertBox title="Warning" message="Warning message." />);
    expect(queryByText('Warning')).toBeInTheDocument();
    await waitFor(() => {
      expect(queryByText('Warning')).not.toBeInTheDocument();
    }, { timeout: 6000 });

    jest.useRealTimers();
  });

  it('alert shouldnt disappear even after 5 seconds if isDismissible is false', async () => {
    jest.useFakeTimers();
    const { getByText } = render(<AlertBox title="Success" message="Success message." isDismissible={false} />);
    expect(getByText('Success')).toBeInTheDocument();
    await waitFor(() => expect(getByText('Success')).toBeInTheDocument(), { timeout: 6000 });
    jest.useRealTimers();
  });
});
