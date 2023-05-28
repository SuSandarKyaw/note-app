import { useState } from "react"

export default function NewNoteForm({handelNext,handleSave}){

  const [inputValue,setInputValue]=useState('');


  //spread syntax ...
  //Concat()
    return (
         <div className="d-flex gap-3 my-3">
            <input className="form-control" placeholder="Note"
            value={inputValue}
            onChange={(event)=> setInputValue(event.target.value)}/>
            <button className="btn btn-warning" onClick={()=>handleSave(inputValue)}>
              Save
            </button>
            <button className="btn btn-danger" onClick={handelNext}>
             Cancel
            </button>
         </div>
    )
}