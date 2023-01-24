import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note,setNote] = useState({
    title:"",
    content:""
  });

  const [zoom,setZoom] = useState(false);

  function createNote(event){
    const {name,value} = event.target;
    // console.log(name);
    setNote(prevVal => {
        return ({...prevVal,
        [name] : value
        });
        // console.log(note);
    });
  }

  function addNote(){
    props.add(note);
    // console.log(note);
    setNote({
        title:"",
        content:""
    });
  }

  function expand(){
    setZoom(true);
  }

  return (
    <div>
      <form className="create-note">
        {zoom && <input onChange={createNote} name="title" placeholder="Title" value={note.title} />}
        <textarea onChange={createNote} onClick={expand} name="content" placeholder="Take a note..." rows={zoom?3:1} value={note.content}  />
        <Zoom in={zoom} style={{ transitionDelay: true ? '500ms' : '0ms' }}>
        <Fab onClick={addNote}>
        <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
