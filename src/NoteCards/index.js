import { useState } from "react";
import CardItem from "./CardItem";
import CardNoteForm from "./CardNoteForm";
import { CardNote, MockCard } from "./Mockcard";
import HomeLayout from "../layout/HomeLayout";
import EditCardNoteForm from "./EditCardNoteForm";


export default function NoteCards(){

    const [isAddNew, setIsAddNew]=useState(false);
    const [data,setData]=useState(CardNote);
    const [editInputValue, setEditInputValue]= useState('');
    const [iseditID,setEditID]=useState(null);
  const handleAddNew=()=>{
    setIsAddNew(true);
  }

   const handleClose=()=>{
     setIsAddNew(!isAddNew);
  
   }

   const handleSave=(inputValue)=>{
      const tempData=[...data, {id: Math.random(100), note:inputValue}];
      setData(tempData);
      setEditInputValue("")
  
   }

   const handleDelete=(id)=>{
    const tempData= data.filter((item)=> item.id !== id)
    setData(tempData);
    
   }

   const handleEdit=()=>{
    const tempData= data.map((item)=>{
      if(item.id === iseditID){
        return {id: iseditID, note : editInputValue}
      }
      return item;
    })
    setData(tempData);
    setEditInputValue("");
   }
    return(
       <HomeLayout>
         <div>
          
          {
              isAddNew ? 
              <CardNoteForm handleAddNew={handleAddNew} handleClose={handleClose} handleSave={handleSave}/>
              :
              <div className="text-center">
                  <button className="btn btn-outline-danger mt-3" onClick={handleAddNew}>
              Add New
            </button>
              </div>
          }
          

          {
            iseditID && <EditCardNoteForm handleEdit={handleEdit} setEditID={setEditID} iseditID={iseditID} editInputValue={editInputValue} setEditInputValue={setEditInputValue} />
          }
          
                    <div className="d-flex gap-3 mt-3 flex-wrap">
                    {
                      data.map((item,index)=><CardItem data={item} key={item.id} handleDelete={handleDelete} iseditID={iseditID}
                      setEditID={setEditID} setInputValue={setEditInputValue}
                      />)
                    }
                    </div>
                  </div>
              
       </HomeLayout>
    )
}
