import {AiFillEdit,AiOutlineDelete} from "react-icons/ai";
import { CardNote } from "./Mockcard";

import './notecard.css'
export default function CardItem({handleDelete,data,setEditID,setInputValue}){

    return (
        <div id="notecard" className="card container-fluid col-3 ">
            <section>
                {data.note}
            </section>
            <div className="mt-auto d-flex gap-2 justify-content-center align-items-center">
            <button className="btn btn-outline-primary" onClick={()=>{
                setEditID(data.id)
                setInputValue(data.note)}}>
                <AiFillEdit/>
            </button>
            <button className="btn btn-outline-danger" onClick={()=>handleDelete(data.id)}>
                <AiOutlineDelete/>
            </button>
            </div>
        </div>
    )
}