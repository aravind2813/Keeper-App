import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList,setNoteList] = useState([]);
const [key,setKey] = useState(0);
  function addNote(noteItem){
    // console.log(noteItem);
    setNoteList(prevVal =>{
        
        return [...prevVal,noteItem];
    });
    setKey(prevVal=>prevVal+1);
  }

  function delNote(id){
    setNoteList(prevVal=>{
        return prevVal.filter((item,index)=>{
            return index!==id;
        });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea 
        key={key}
        add={addNote}
      />
      {noteList!==undefined && noteList.map((item,index)=>{
        return (<Note key={index} id={index} title={item.title} content={item.content}  del={delNote}/>);
      })}
      
      <Footer />
    </div>
  );
}

export default App;
