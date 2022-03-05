import React from "react";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from "../TodoForm";

function AppUI() {
    const {
        completeTodo,
        deleteTodo,
        error,
        loading,
        openModal,
        searchedTodos,
        setOpenModal,
    } = React.useContext(TodoContext);


    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>Error!</p>}
                {loading && <p>Estamos cargando...</p>}
                {(!loading && !searchedTodos?.length) && <p>Crea tu primer TODO!</p>}
                {searchedTodos.map(todo => (
                    <TodoItem key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm></TodoForm>
                </Modal>
            )}
            <CreateTodoButton setOpenModal={setOpenModal} />
        </>
    )
}

export { AppUI };