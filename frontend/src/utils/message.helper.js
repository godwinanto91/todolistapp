import { MESSAGE_INFO } from "../enum/message.enum"

/**
 * Generates an error message.
 * 
 * @param {string} description - The description of the error.
 * @param {Error} error - The error object.
 * @returns {string} - The error message.
 */
export const errorMessageHandler = (description, error) => {
    return description ? `${description} : ${error?.response?.data || MESSAGE_INFO.defaultErrorMessage}` : `${MESSAGE_INFO.defaultErrorMessage}`
}
/**
 * Generates a success message.
 * 
 * @param {string} description - The description of the action.
 * @param {string} message - The success message.
 * @returns {string} - The success message.
 */
export const successMessageHandler = (description, message) => {
    return `${description} : ${message}`
}
