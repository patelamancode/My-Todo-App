import { Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react';
import { fb } from './firebase_config';
// import { fb } from "./firebase_config"

export default function TodoListItem({todo, Inprogress, id}) {
    function updateProgress(){
        fb.collection("todos").doc(id).update({
            Inprogress: !Inprogress,
        })
    }

    function deleteTodo(){
        fb.collection("todos").doc(id).delete();
    }



    return (
        <div style= {{display: "flex"}}>
           <ListItem>
               <ListItemText primary={todo} secondary={Inprogress ? "Inprogress" : "completed"} />
           </ListItem>
           <Button onClick={updateProgress}>
                {Inprogress ? "Done" : "Undone"}
           </Button>
           <Button onClick={deleteTodo}>
               X
           </Button>
        </div>
    )
}
