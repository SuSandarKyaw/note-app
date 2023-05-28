import { useState } from 'react';
import './App1.css';


export default function Day3App(){
    const [name,setName]=useState('Mg Mg');
    const handeleNextPerson =()=>{
        const tempName = name === 'Mg Mg' ? 'John' : "Mg Mg"
        setName(tempName);
       }
    return(
       <div className='container d-flex justify-content-between'>
        {
            name === 'Mg Mg' ?
              (<Card name={name} 
                handeleNextPerson={handeleNextPerson} key="1"/>
            
              ):(
                    <Card name={name} 
                    handeleNextPerson={handeleNextPerson} key="2"/>
    
              )

        }
       </div>
    )
}

//lifting state up

//sharing data between components

//conditional rendering

//component state isolation

const Card=({name,handeleNextPerson})=>{
    const [number, setNumber] =useState(0);
   
    
 return (
 <div className='card bg-primary col-3 mt-3'>
<h1 className='text-white text-center'>{name}</h1>
 <h1 className='text-white text-center'>Marks:{number}</h1>
 <button className='btn btn-warning rounded-0' onClick={()=> setNumber(number+1)}>
    Increment
 </button>
 <button className='btn btn-danger rounded-0 mt-3' onClick={handeleNextPerson}>
    Next
 </button>
</div>

 )
}