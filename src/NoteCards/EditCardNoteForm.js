export default function EditCardNoteForm({editInputValue,setEditInputValue,setEditID,handleEdit}){
 

    return (
        <div className="d-flex gap-3 justify-content-center align-items-center" >
            <input placeholder="Note..."
            value={editInputValue}
            onChange={(event)=> setEditInputValue(event.target.value)}/>
            <button className="btn btn-secondary" onClick={()=>{
                setEditID(null)
                setEditInputValue(null)}}>
                Close
            </button>
            <button className="btn btn-primary" onClick={handleEdit}>
                Save
            </button>
        </div>
    )
}