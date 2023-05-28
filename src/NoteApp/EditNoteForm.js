
export default function EditNewNoteForm({handleEdit,setEditId,EditInputValue, setEditInputValue}){
    return (
         <div className="d-flex gap-3 my-3">
            <input className="form-control" placeholder="Note"
            value={EditInputValue}
            onChange={(event)=> setEditInputValue(event.target.value)}/>
            <button className="btn btn-warning" onClick={handleEdit}>
              Save
            </button>
            <button className="btn btn-danger" onClick={()=>{
              setEditId(null);
              setEditInputValue(null);
            } }>
             Cancel
            </button>
         </div>
    )
}