import React from 'react';
/**
 * Footer Component
 *
 * Represents the footer of the application.
 *
 * @returns {JSX.Element} - The JSX element representing the footer.
 */
export const Footer = () => {
  return (
    <footer className="page-footer font-small teal pt-4">
      <div className="text-center py-3">
        © {new Date().getFullYear()} Developed by
        <a href="mailto:godwin@example.com" style={{ marginLeft: '5px' }}>
          Godwin Anto
        </a>
      </div>
    </footer>
  );
};
