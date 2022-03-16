import React from "react";
import {TodoContext} from "../todoContext";

function TodoForm () {
   const [newTodoValue, setNewTodoValue] = React.useState("");
   const {
       addTodo,
       setOpenModal,
   }= React.useContext(TodoContext);

    const onChange = (event) =>{
     setNewTodoValue(event.target.value);
    };

     const onCancel = () =>{
         setNewTodoValue(false);
     };
    
     const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

  


    return(
        <form onSubmit={onSubmit}>
            <label>...</label>
            
            <textarea
            value={newTodoValue}
            onChange={onChange} 
            placeholder="cortar la cebolla para el almuerzo"
            />

            <div>
                <button 
                  type="button"
                  onClick={onCancel}
                >
                    cancelar
                </button>
                <button
                  type="submit"
                >
                    añadir
                </button>
            </div>
        </form>
    );
}


export {TodoForm};