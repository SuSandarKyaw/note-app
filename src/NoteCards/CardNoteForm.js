import { useState } from "react";

export default function CardNoteForm({handleClose,handleSave}){
    const [inputValue,setInputValue]=useState('')
 

    return (
        <div className="d-flex gap-3 justify-content-center align-items-center mb-3" >
            <input placeholder="Note..."
            value={inputValue}
            onChange={(event)=> setInputValue(event.target.value)}/>
            <button className="btn btn-secondary" onClick={handleClose}>
                Close
            </button>
            <button className="btn btn-primary" onClick={()=>{
                handleSave(inputValue);
                setInputValue("")}}>
                Save
            </button>
        </div>
    )
}