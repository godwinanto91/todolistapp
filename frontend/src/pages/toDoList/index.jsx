import React, { createContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddToDoContent } from "../../feature/addToDo";
import { ToDoItemsContent } from "../../feature/toDoItems";
import { AlertBox } from "../../components/alert";
import { deleteApiRequest, getApiRequest, manageToDoList, postApiRequest, putApiRequest } from "../../utils/axios.helper";
import { TODO_LIST_PATH } from "../../enum/urlpath.enum";
import { errorMessageHandler, successMessageHandler } from "../../utils/message.helper";
import { MESSAGE_INFO } from "../../enum/message.enum";
import { CustomSpinner } from "../../components/spinner";

export const ToDoItemContext = createContext();

/**
 * ToDoList Component
 * 
 * Represents the main component for managing todo items.
 * 
 * @returns {JSX.Element} - The JSX element representing the todo list.
 */
export const ToDoList = () => {
    const [todoState, setTodoState] = useState({
        items: [],
        refetch: false,
        submitted: true,
        alertMessage: {},
        description: "",
        isLoading: false
    });

    const handleErrorMessage = (description,error) => {
        const messageDetails = {
            title: MESSAGE_INFO.errorTitle,
            message: errorMessageHandler(description, error),
            variant: "danger"
        };
        setTodoState(prevState => ({ ...prevState, alertMessage: messageDetails }));
    };

    useEffect(() => {
        //Trigger GET/items API call when refetch flag has been changed and populate the table. 
        //Also handles the error response gracefully.
        const getItems = async () => {
            try {
                setTodoState(prevState => ({ ...prevState, isLoading: true }));
                const response = await getApiRequest(manageToDoList(TODO_LIST_PATH.toDoList));
                if (response && response.status !== "Failure") {
                    setTodoState(prevState => ({ ...prevState, items: response.data }));
                } else {
                    const messageDetails = {
                        title: MESSAGE_INFO.errorTitle,
                        message: errorMessageHandler("",response.error),
                        variant: "danger"
                    };
                    setTodoState(prevState => ({ ...prevState, alertMessage: messageDetails }));
                }
                setTodoState(prevState => ({ ...prevState, isLoading: false }));
            } catch (error) {
                const messageDetails = {
                    title: MESSAGE_INFO.errorTitle,
                    message:  errorMessageHandler("",error),
                    variant: "danger"
                };
                setTodoState(prevState => ({ ...prevState, alertMessage: messageDetails, isLoading: false }));
            }
        };
        getItems();
    }, [todoState.refetch]);

    //Trigger POST/items API call when Add button has been clicked with valid description.
    //Also trigger GET/item call once successful to fetch the updated data and handles the error response gracefully.
    const handleAdd = async () => {
        const description = todoState.description?.trim();
        if (description === "") {
            setTodoState(prevState => ({ ...prevState, submitted: false }));
            return;
        }
        setTodoState(prevState => ({ ...prevState, submitted: true, isLoading: true }));
        try {
            setTodoState(prevState => ({ ...prevState, alertMessage: {} }));
            const request = { description };
            const response = await postApiRequest(manageToDoList(TODO_LIST_PATH.toDoList), request);
            const submitSiteResponse = response.data;
            const messageDetails = {
                title: MESSAGE_INFO.successTitle,
                message: successMessageHandler(description, MESSAGE_INFO.addMessage),
                variant: "success"
            };
            if (submitSiteResponse) {
                setTodoState(prevState => ({ ...prevState, refetch: !prevState.refetch, alertMessage: messageDetails, isLoading: false }));
            }
        } catch (error) {
            setTodoState(prevState => ({ ...prevState, submitted: false, isLoading: false }));
            handleErrorMessage(error?.code === "ERR_NETWORK" ? "": todoState.description ,error);
        }
    };

    //Trigger PUT/items API call when "Mark as Completed" button has been clicked 
    //and corresponding button will be changed to "Completed".Also trigger 
    //GET/item call once successful to fetch the updated data and handles the error response gracefully.
    const handleMarkAsComplete = async (item) => {
        try {
            setTodoState(prevState => ({ ...prevState, alertMessage: {}, isLoading: true }));
            const request = { description: item.description?.trim(), isCompleted: true };
            const url = `${manageToDoList(TODO_LIST_PATH.toDoList)}/${item.id}`;
            await putApiRequest(url, request);
            const messageDetails = {
                title: MESSAGE_INFO.successTitle,
                message: successMessageHandler(item.description, MESSAGE_INFO.updateMessage),
                variant: "success"
            };
            setTodoState(prevState => ({ ...prevState, alertMessage: messageDetails, refetch: !prevState.refetch, isLoading: false }));
        } catch (error) {
            setTodoState(prevState => ({ ...prevState, isLoading: false }));
            handleErrorMessage(item.description, error);
        }
    };

    //Trigger Delete/items API call when "Remove" button has been clicked and selected item will be remove from table. 
    //Also trigger GET/item call once successful to fetch the updated data and handles the error response gracefully.
    const handleDelete = async (item) => {
        try {
            setTodoState(prevState => ({ ...prevState, alertMessage: {}, isLoading: true }));
            const url = `${manageToDoList(TODO_LIST_PATH.toDoList)}/${item.id}`;
            await deleteApiRequest(url);
            const messageDetails = {
                title: MESSAGE_INFO.successTitle,
                message: successMessageHandler(item.description, MESSAGE_INFO.deletedMessage),
                variant: "success"
            };
            setTodoState(prevState => ({
                ...prevState,
                alertMessage: messageDetails,
                refetch: !prevState.refetch,
                isLoading: false
            }));

        } catch (error) {
            setTodoState(prevState => ({ ...prevState, isLoading: false }));
            handleErrorMessage(item.description, error);
        }
    };
    return (
        <ToDoItemContext.Provider value={{ setTodoState, ...todoState }}>
            {todoState.isLoading ? <CustomSpinner color="primary" role="status" /> : <></>}
            <Container>
                <Row>
                    {Object.keys(todoState.alertMessage).length !== 0 && (
                        <AlertBox
                            title={todoState.alertMessage.title}
                            message={todoState.alertMessage.message}
                            variant={todoState.alertMessage.variant}
                        />
                    )}
                </Row>
                <Row>
                    <Col>
                        <AddToDoContent handleAdd={handleAdd} />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <ToDoItemsContent
                            handleMarkAsComplete={handleMarkAsComplete}
                            handleDelete={handleDelete}
                        />
                    </Col>
                </Row>
            </Container>
        </ToDoItemContext.Provider>
    );
};
