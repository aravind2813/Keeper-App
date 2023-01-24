import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';

function Note(props){
function deleteNote(){
    props.del(props.id);
}

    return (<div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <Fab onClick={deleteNote}> <DeleteIcon /> </Fab>
    </div>);
}

export default Note;