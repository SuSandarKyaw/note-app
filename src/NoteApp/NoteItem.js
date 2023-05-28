import {AiFillEdit,AiOutlineDelete} from "react-icons/ai";

export default function NoteItem({data,orderNumber,handleDelete,setEditId,setEditInputValue,setIsAddNew}){

    return (
        <div>
           
         <div className="d-flex gap-3">
          <h3 className="text-white" style={{
            minWidth:"400px"
          }}> {data.note}</h3>
            <button className="btn btn-primary" onClick={()=>{
            setEditId(data.id);
            setEditInputValue(data.note);
            }
              } >
            <AiFillEdit/>  
            </button>
            <button className="btn btn-danger" onClick={()=>handleDelete(data.id)}>
            <AiOutlineDelete/>  
            </button>
         </div>
        </div>
    )
}