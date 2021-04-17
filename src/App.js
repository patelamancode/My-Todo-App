import './App.css';
import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from 'react';
import firebase from "firebase";
import { Button } from '@material-ui/core';
import { fb } from "./firebase_config";
import TodoListItem from "./Todo";



function App() {



  const [todos, setTodos] = useState([]);
  const [todoInput,setTodoInput] = useState("");

    useEffect(() => {
      getTodos();
    }, []);  
    // This square bracket is blank because of first launch

    function getTodos(){
      fb.collection("todos").onSnapshot(function(querySnapshot){
        setTodos(
          querySnapshot.docs.map((doc)=> ({
            id: doc.id,
            todo: doc.data().todo,
            Inprogress: doc.data().Inprogress,
          }))
        );
        
      });
    }

  
  function addTodo(e){
    e.preventDefault();
    // console.log(`you are try to add todo`)
    fb.collection("todos").add({
      Inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");
  }

  // function SignOut(){
  
  // }



  return (
    
    <div
     className="App"
      style={{
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width: "100%",
        }}
        >
        {/* <nav style={{display: 'flex',justifyContent:'flex-end'}}>
          <button type="submit"    
               variant="contained" 
               onClick={SignOut}
               >
               SignOut
          </button>
        </nav> */}
        <div>
          <h1>Welcome To Aman's ToDo App🙏</h1>
          <form>
            <TextField 
             id="standard-basic" 
             label="Add a new Todo"
             value={todoInput}
             onChange={(e) => 
              setTodoInput(e.target.value)
              // console.log(`${e.target.value}`)
             }
             style={{width: "90vw",maxWidth: "500px"}}     
            />
              <Button 
               type="submit"    
               variant="contained" 
               onClick={addTodo}
               style={{display:"none"}}
               >
                 ClickMe!!
              </Button>
          </form>
         <div style={{width: "90vw",maxWidth: "500px",marginTop: "40px"}}>
            {todos.map((todo) => (
               <TodoListItem 
                todo={todo.todo}
                Inprogress={todo.Inprogress}
                id={todo.id}
              />
            ))}   
         </div>   
        </div>   
      </div>
      
   
    
      
  );
}

export default App;
