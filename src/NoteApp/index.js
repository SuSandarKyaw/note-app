import { useState } from "react";
import { NoteData } from "../Mock/data";
import NewNoteForm from "./NewNoteForm";
import NoteItem from "./NoteItem";
import EditNewNoteForm from "./EditNoteForm";

export default function NoteAppPage(){

const [data,setData]=useState(NoteData);
const [isAddNew, setIsAddNew]=useState(false);
const [editId, setEditId]=useState(null);
const [EditInputValue,setEditInputValue]=useState('');

const handelNext=()=>{
    setIsAddNew(!isAddNew)   

};
const handleSave =(inputValue)=>{
    const tempData =[...data, {id: Math.random(1000), note:inputValue}]
    setData(tempData);
    };
const handleDelete =(id) =>{
   const tempData= data.filter((item)=> item.id != id)
   setData(tempData) 
}

const handleEdit=()=>{
    const tempData= data.map((item)=>{
        if(item.id === editId){
            return {id: editId, note :EditInputValue}
        }
        return item;
    })
    setData(tempData);
    setEditId(null);
    setEditInputValue('');
}
    return (
        <div className="d-flex justify-content-center align-items-center bg-dark flex-column" style={
            {minHeight:"100vh"}
        }
        >
            {
                isAddNew ? 
                <NewNoteForm handelNext={handelNext} handleSave={handleSave}/> 
                : <button className="btn btn-primary" onClick={handelNext}>
                Add New 
                 </button>
            }
           {
        
        editId && <EditNewNoteForm handleEdit={handleEdit} setEditId={setEditId} EditInputValue={EditInputValue}
         setEditInputValue={setEditInputValue} />
        }
    
        
            
         <ul> 
        {
            data.map((item,index) => (
                <NoteItem data={item} key={item.id} orderNumber={index +1}  handleDelete={handleDelete} setEditId={setEditId}
                setEditInputValue={setEditInputValue}/>
            ))
        }
         </ul>
     </div>
    )
}