import { Header } from './header';
import { Body } from './body';
import { Footer } from './footer';
/**
 * DefaultLayout Component
 * 
 * Represents the default layout of the application.
 * 
 * @returns {JSX.Element} - The JSX element representing the default layout.
 */
export const DefaultLayout = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
      <Footer />
    </div>
  );
};