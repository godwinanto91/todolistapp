import './styles.css';

/**
 * Title Component
 * 
 * @param {string} text - The text to be displayed as the title.
 * @returns {JSX.Element} - The JSX element representing the title.
 */
export const Title = ({ text }) => {
    return (
        <h1 className="title">{text}</h1>
    );
}